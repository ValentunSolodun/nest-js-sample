import { Controller, Render, Get, Post, Body, Inject, Req, Res } from '@nestjs/common';
import { LoginService } from './login.service';
import { AuthService } from '../auth/auth.service';

@Controller('login')
export class LoginController {
  private logService: LoginService;
  private authService: AuthService;

  constructor(logService: LoginService, authService: AuthService) {
    this.logService = logService;
    this.authService = authService;
  }

  @Get()
  @Render('login')
  getLogin(): object {
    return this.logService.getTitle();
  }

  @Post()
  async postLogin(@Body() user: any, @Req() req, @Res() res) {
    const userMy = await this.authService.validateUser(user.email, user.password);
    console.log(userMy)
    this.logService.postLoginService(user)
      .then(r => {
        res.cookie('access_token', r.access_token, {
          httpOnly: false,
          path: '/',
        });
        res.setHeader('access_token', r.access_token);
        res.redirect('/');
      })
      .catch(err => res.sendStatus(401));
  }
}
