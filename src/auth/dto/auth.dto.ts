import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

/* export class logins {

  @IsArray
} */

export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
