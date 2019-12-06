import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import {loginProviders} from './login.providers';
import {DatabaseModule} from '../database/database.module';
import {AuthModule} from '../auth/auth.module';
import {AuthService} from '../auth/auth.service';

@Module({
  imports: [AuthModule],
  providers: [LoginService, ...loginProviders],
  controllers: [LoginController],
})
export class LoginModule {}
