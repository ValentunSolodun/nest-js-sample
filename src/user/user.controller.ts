import { Controller, Get, Post, Body, Render, Res } from '@nestjs/common';
import { CreateUser } from './interfaces/create.user';
import { UsersService } from './user.service';
import { Response } from 'express';
import { UserEntity } from './user.entity';
import { async } from 'rxjs/internal/scheduler/async';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }
}
