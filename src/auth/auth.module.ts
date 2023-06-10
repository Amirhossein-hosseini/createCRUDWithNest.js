import { PrismaModule } from './../../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'prisma/prisma.service';
// import { LocalStrategy } from './local.stratejy';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.stratejy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, PrismaService],
  imports: [PrismaModule, PassportModule],
})
export class AuthModule {}
