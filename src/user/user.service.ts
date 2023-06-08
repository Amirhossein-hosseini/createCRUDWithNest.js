import { updateUser } from './dtos/update-user.dto';
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Body, Delete, Get, Injectable, Post, Put } from '@nestjs/common';
import { UserDto } from './dtos/create-user.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private  prisma:PrismaService ){}

   async createUser(user: UserDto){
       const users = await this.prisma.user.create({ 
            data:{
                name: user.name,
                email: user.email,
                password: user.password
            },
        })

        return users
    }

    async getUser(id:number){
        const user = await this.prisma.user.findUnique({
            where:{
                id
            }
        })

        return user
    }

    async getUsers(){
        const users = await this.prisma.user.findMany();
        return users
    }

    async updateUser(data:updateUser,id:number){
        const user = await this.prisma.user.update({
       
            where:{
                id:id
            },
            data:{
                name:data.name
            }

        })



        return user
    }

    async deleteUser(id:number){
        const user = await this.prisma.user.delete({
            where:{
                id:id
            }
        })
        return user
    }


}
