import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from 'src/user/dtos/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/rejyster')
  async rejister(@Body() body: UserDto) {
    const user = await this.authService.create(body);
    return user;
  }
}
