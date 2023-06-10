import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { UserDto } from 'src/user/dtos/create-user.dto';
import { AuthService } from './auth.service';
import { loginDto } from 'src/user/dtos/login.dto';
// import { AuthGuard } from '@nestjs/passport';
// import { LocalAuthGuard } from './auth.stratejy';
import { LocalStrategy } from './local.stratejy';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(public authService: AuthService) {}

  @Post('/rejyster')
  async rejister(@Body() body: UserDto) {
    const user = await this.authService.create(body);
    return user;
  }

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  async login(@Body() body: loginDto, @Req() req) {
    console.log(req.user);
    return req.user;
  }
}
