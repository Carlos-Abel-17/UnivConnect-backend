import { ApiProperty } from "@nestjs/swagger";
import { IsEmail } from "class-validator";


export class ForgotPasswordDto {

   @ApiProperty({example:'fulanito@gmail.com', description:'Correo valido'})
   @IsEmail()
     Email: string;

};