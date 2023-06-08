/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { IsEmail, IsString, Length } from "class-validator";



export class updateUser {
  @IsString()
  name: string
//   @IsEmail()
//   email: string

//   @IsString()
//   @Length(5, 20, { message: 'لطفا ایمیل خودرا درست وارد کنید...' })
//   password: string;
}
