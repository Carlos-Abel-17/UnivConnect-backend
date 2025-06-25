import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateUserEntities } from 'src/core/entities/create-user.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import { JwtStrategy } from './strategies/jwt.strategy';


@Module({
  imports:[TypeOrmModule.forFeature([CreateUserEntities]),
  PassportModule, JwtModule.register({
    secret:process.env.JWT_SECRET,
    signOptions:{expiresIn:'1d'}
  })
],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy]
})
export class AuthModule {}
