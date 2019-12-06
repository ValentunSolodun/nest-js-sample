import { Controller, Get, Render, Post, Body, Res, Req } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { UsersService } from '../user/user.service';
// import { IsEmail } from 'class-validator';

class PostRegister {
  name: string;

  email: string;

  password: string;
}

@Controller('registration')
export class RegistrationController {
  constructor(private regService: RegistrationService,
              private useService: UsersService) {
  }

  @Get()
  @Render('register')
  getRegister(): object {
    return this.regService.getTitle();
  }

  @Post()
  postRegister(@Body() data: PostRegister, @Req() req, @Res() res) {
    this.useService.findOne(data.email).then(
      rows => {
        if (rows) {
          res.status(409);
          res.render('register', { textErr: 'User is already exist', title: 'Registration' });
          return;
        }
        this.useService.createUser(data)
          .then(() => res.redirect('/login'))
          .catch(() => res.sendStatus(500));
      },
    );
  }
}
