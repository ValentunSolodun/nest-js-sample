import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import {usersProviders} from './user.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [UsersService, ...usersProviders],
  exports: [UsersService],
})
export class UsersModule {}
