import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, MaxLength } from "class-validator";


export class LoginUser{
 
 @ApiProperty({example:'fulanito@gmail.com', description:'Correo valido'})
 @IsEmail()
    Email:string;

 @ApiProperty({example:'@guado123', description:'La contraseña encryptada debe de ser de 8 digitos como maximo'})
 @IsString()
 @MaxLength(8)
    Password:string;
}