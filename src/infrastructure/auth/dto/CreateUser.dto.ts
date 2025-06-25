import { IsInt,IsDate, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength, IsEmail } from 'class-validator';
import {Type} from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger';


export class CreateUser {

 @ApiProperty({example:'Carlos Abel', description:'Nombre del usuario'})   
 @MaxLength(80)
 @IsString()
 Name:string;

 @ApiProperty({example:'Aguado Ramos', description:'Apellido del usuario'})
 @MaxLength(80)
 @IsString()
 LastName:string;

 @ApiProperty({example:'1990/06/25', description:'Fecha de nacimiento del usuario'})
 @IsNotEmpty()
 @IsDate()
 @Type(()=>Date)
 Birthdate:Date;

 @ApiProperty({example:8, description:'El id del genero del usuario 1 = M, 2 = F'})
 @MaxLength(2)
 @IsString()
 Gender:number;

 @ApiProperty({example:983446294, description:'Numero de telefono del usuario'})
 @MaxLength(9)
 @IsNumber()
 Number:number;

 @ApiProperty({example:'fulanito@gmail.com', description:'Correo valido'})
 @IsEmail()
 Email:string;
 
 @ApiProperty({example:'@guado123', description:'La contraseña encryptada debe de ser de 8 digitos como maximo'})
 @IsString()
 @MaxLength(8)
 Password:string;

 @ApiProperty({example:'@guado123', description:'La contraseña noEncryptada debe de ser de 8 digitos como maximo'})
 @IsString()
 @MaxLength(8)
 PasswordView:string;

 @ApiProperty({example:1, description:'El id del departamento'})
 @IsInt()
  Departament:number;

 @ApiProperty({example:6, description:'El id de la provincia'})
 @IsInt()
  Province:number;

 @ApiProperty({example:3, description:'El id del distrito'})
 @IsInt()
  District:number;
};