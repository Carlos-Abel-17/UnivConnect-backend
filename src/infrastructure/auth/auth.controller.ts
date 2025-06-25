import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUser } from './dto/CreateUser.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginUser } from './dto/LoginUser.dto';
import { ForgotPasswordDto } from './dto/ForgotPassword.dto';
import { ResponseDataError } from 'src/shared/helpers/Response.helpers';
import { ResetPasswordDto } from './dto/ResetPassword.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {

    constructor(
        private readonly AuthService:AuthService
    ){}

    @Post('CreateUser')
    @ApiOperation({ summary: 'Registrar un nuevo usuario'})
    @ApiResponse({ status: 201, description: 'Usuario creado correctamente.'})
    @ApiResponse({ status: 400, description: 'Datos inválidos.'})
    CreateUser(@Body() dto:CreateUser){
        return this.AuthService.CreateUser(dto);
    };
    
    @Post('Login')
    @ApiOperation({ summary: 'Inicio de session' })
    @ApiResponse({ status: 201, description: 'Inicio de session correctamente.' })
    @ApiResponse({ status: 400, description: 'Ocurrio algun problema con el inicio de session.' })
    async LoginUsers(@Body() body:LoginUser){
        const user = await this.AuthService.Validate(body);
        if(!user){
            ResponseDataError('Correo o contraseña incorrectos',user)
        };
        return  this.AuthService.LoginUser(user);
    }

    @Post('ForgotPassword')
    @ApiOperation({ summary: 'El usuario solicita restablecer su contraseña (manda su correo)' })
    @ApiResponse({ status: 201, description: 'Exito' })
    @ApiResponse({ status: 400, description: 'Hubo algun error'})
    async ForgotPassword(@Body() dto:ForgotPasswordDto){
     return this.AuthService.ForgotPassword(dto);
    };

    @Post('ResetPassword')
    @ApiOperation({ summary: 'El usuario envía el token y la nueva contraseña para actualizarla' })
    @ApiResponse({ status: 201, description: 'Exito' })
    @ApiResponse({ status: 400, description: 'Hubo algun error'})
    async ResetPassword(@Body() dto:ResetPasswordDto){
     return this.AuthService.ResetPassword(dto);
    };
    
}
