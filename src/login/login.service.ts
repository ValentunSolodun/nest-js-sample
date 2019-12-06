import { Injectable, Inject } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class LoginService {
  constructor( private readonly authService: AuthService) {}
  getTitle(): object {
    return {title: 'Login'};
  }

  async postLoginService(user) {
    const userMy = await this.authService.validateUser(user.email, user.password);
    return this.authService.login(userMy.dataValues);
    // return this.authService
    // .login(user).then(data => res.setCookies('access_token', data.access_token)).catch();
  }
}
