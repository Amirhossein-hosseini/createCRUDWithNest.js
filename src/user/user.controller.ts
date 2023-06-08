import {
  Controller,
  NotFoundException,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common';
import { Body, Delete, Get, Post, Put } from '@nestjs/common';
import { UserDto } from './dtos/create-user.dto';
import { UserService } from './user.service';
import { updateUser } from './dtos/update-user.dto';
// import { TransformInterceptor } from './transform.interceptore';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getUsers() {
    const users = await this.userService.getUsers();
    return users;
  }

  @Get('/:id')
  // @UseInterceptors(TransformInterceptor)
  async getUser(@Param('id', ParseIntPipe) id: number) {
    const user = await this.userService.getUser(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }
  @Post()
  async createUsers(@Body() body: UserDto) {
    const user = await this.userService.createUser(body);
    return user;
  }

  @Put('/:id')
  async updateUser(
    @Body() body: updateUser,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const user = await this.userService.updateUser(body, id);
    return user;
  }

  @Delete('/:id')
  async deleteUser(@Param('id', ParseIntPipe) id: any) {
    await this.userService.deleteUser(id);
    return 'User DELETED';
  }
}
