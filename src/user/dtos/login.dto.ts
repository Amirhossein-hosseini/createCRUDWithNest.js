import { Module } from '@nestjs/common';
import { IsEmail, IsString, Length, MinLength } from 'class-validator';



export class loginDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(5)
  password: string;
  
    role?: string = 'USER'
}
