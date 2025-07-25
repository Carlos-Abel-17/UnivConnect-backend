import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUser } from './dto/CreateUser.dto';
import {InjectRepository} from '@nestjs/typeorm' 
import { Repository } from 'typeorm';
import { ResponseData, ResponseDataError } from 'src/shared/helpers/Response.helpers';
import { CreateUserEntities } from 'src/core/entities/create-user.entity';
import * as dotenv from 'dotenv';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'
import { LoginUser } from './dto/LoginUser.dto';
import { ForgotPasswordDto } from './dto/ForgotPassword.dto';
import { ResetPasswordDto } from './dto/ResetPassword.dto';

dotenv.config();

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(CreateUserEntities)
        private AuthUserRepository: Repository<CreateUserEntities>,
        private jwtService:JwtService
    ){};

    // async CreateUser(dto:CreateUser){
    //     try {
    //         //console.log(dto)
    //         const {Password, ...rest} = dto; 
    //         const saltOrRounds = 10;
    //         const hashedPassword = await bcrypt.hash(Password, saltOrRounds);  

    //         const NewUser = this.AuthUserRepository.create({...rest, Password:hashedPassword,});
    //         await this.AuthUserRepository.save(NewUser);

    //         return ResponseData('Usuario registrado', NewUser)
    //     } catch (error) {
    //         return ResponseDataError('Hubo un error en la creacion', error)
    //     }
    // };
 
    async Validate(dto:any){
        const user = await this.AuthUserRepository.findOneBy({Email:dto.datosUser.email});

         if (!user || !dto.datosUser.password || !user.Password) {
            throw new Error('Faltan credenciales para validar');
        }
        if(user && await bcrypt.compare(dto.datosUser.password, user.Password)){
            const {Password, ...result} = user;
            return result;
        }
        return null;
    };

    async LoginUser(user:any){
        console.log('el user que llega a loginUser',user)
        const payload = {
        sub: user.IdUser,       // `sub` es el estándar para el subject del token
        email: user.Email
        };
        if(payload){
            return {
                message:'login con exito',
                access_token:this.jwtService.sign(payload, {
                secret: process.env.JWT_SECRET,
                expiresIn: '24h'
            }),
                status:'succeeded'
            }
        }else{
            return {
                message:'no se logro el login',
                access_token:this.jwtService.sign(payload),
                status:'failed'
            }
        }
    };

    async ForgotPassword(dto:ForgotPasswordDto){
        const user = await this.AuthUserRepository.findOne({where:{Email:dto.Email}})
        
        if(!user){
            ResponseDataError('',user);
        }

        const payload = {sub:user.IdUser, email:user.Email}
        const Token = await this.jwtService.signAsync(payload,{
            secret:process.env.JWT_SECRET, expiresIn:'15m'
            
        })

        return ResponseData('Token de recuperación generado',{token:Token});
    }

    async ResetPassword(dto:ResetPasswordDto){
        try {
            const decoded = await this.jwtService.verifyAsync(dto.token,{
                secret:process.env.JWT_SECRET
            });

            const user = await this.AuthUserRepository.findOne({
                where:{IdUser:decoded.sub}
            });

            if(!user){
                ResponseDataError('Usuario no encontrado');
            }
            
            const hashedPassword = await bcrypt.hash(dto.newPassword, 10);
            user.PasswordView = dto.newPassword;
            user.Password = hashedPassword;

            await this.AuthUserRepository.save(user);

            return ResponseData('Contraseña actualizada con éxito')

        } catch (error) {
            ResponseDataError('Hubo un error',error)
        }
    }

}
