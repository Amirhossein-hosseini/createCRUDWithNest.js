import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { UserDto } from 'src/user/dtos/create-user.dto';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { loginDto } from 'src/user/dtos/login.dto';
// import { AuthGuard } from '@nestjs/passport';
// import { LocalAuthGuard } from './auth.stratejy';
import { LocalStrategy } from './local.stratejy';
import { Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(public authService: AuthService, public jwtService: JwtService) {}

  @Post('/rejyster')
  async rejister(@Body() body: UserDto) {
    const user = await this.authService.create(body);
    return user;
  }

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  async login(@Body() body: loginDto, @Request() req) {
    return {
      token: this.jwtService.sign({ id: req.user.id, email: req.user.email }),
    }
    // console.log(req.user);
    
    // return req.user;
  }
}
