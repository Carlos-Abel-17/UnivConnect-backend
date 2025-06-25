import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class ResetPasswordDto {

 @ApiProperty({example:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."})
 @IsString()
  token: string;

 @ApiProperty({example:"nuevaContraseña123"})
 @IsString()
  newPassword: string;

}