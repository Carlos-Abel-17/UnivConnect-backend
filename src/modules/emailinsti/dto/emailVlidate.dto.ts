import { IsEmail, IsNotEmpty } from 'class-validator';

export class emailVlidate {
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
