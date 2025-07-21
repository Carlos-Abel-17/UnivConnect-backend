import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm'
import { CreateUserEntities } from 'src/core/entities/create-user.entity';
import { ResponseData, ResponseDataError } from 'src/shared/helpers/Response.helpers';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(CreateUserEntities)
        private UserRepository: Repository<CreateUserEntities>
    ){}

    async FindOne(id:number):Promise<CreateUserEntities | null> {
        
         const User = this.UserRepository.findOne({where:{IdUser:id},select:{Name:true,LastName:true,Gender:true,Number:true,Email:true,Departament:true,Province:true,District:true}});
         return User;
    }

    async VerifyNameUser(n_u:string){
        //console.log(n_u)
        const VNameUser = await this.UserRepository.findOne({where:{Name_User:n_u}});
        if(VNameUser === null){
            return ResponseData('usuario libre',VNameUser);
        }else{
            return ResponseDataError('usuario ocupado', VNameUser);
        };

    }

    async CreateUser(user:any){
        //console.log(user);
        const createUser = this.UserRepository.create(user);
        const savedUser = await this.UserRepository.save(createUser);
        //console.log(savedUser);
        if(!savedUser){
            return ResponseDataError('no se puedo regitrar',savedUser);
        }else{
           return ResponseData('registro exitoso',savedUser);
        }
    }
}
