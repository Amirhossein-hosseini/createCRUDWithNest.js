import { PrismaModule } from './../../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'prisma/prisma.service';
// import { LocalStrategy } from './local.stratejy';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.stratejy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, PrismaService],
  imports: [
    PrismaModule,
    PassportModule,
    JwtModule.register({
      secret: 'secretMe5789',
      signOptions: { expiresIn: '1d' },
  })],
})
export class AuthModule {}
