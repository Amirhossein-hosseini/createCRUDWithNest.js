import { UserDto } from './../user/dtos/create-user.dto';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from './../../prisma/prisma.service';
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(public PrismaService: PrismaService) {}

  async create(user: UserDto) {
    const password = await bcrypt.hash(user.password, 10);
    const users = await this.PrismaService.user.create({
      data: {
        name: user.name,
        email: user.email,
        password,
      },
      select: {
        id: true,
        email: true,
        name: true,
      }
    });
    return users;
  }

  async validateUser(email: string, password: string){
    const user = await this.PrismaService.user.findUnique({
      where:{
        email
      }
    });
    if (!user) {
      throw new BadRequestException();
    }
    if (!(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
