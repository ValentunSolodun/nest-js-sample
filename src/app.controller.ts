import { Controller, Get, Req, Res, UseGuards, Render, UseFilters } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { HttpExceptionFilter } from './HTTP-exception.filter';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  // @UseGuards(AuthGuard('local'))
  // @Post('auth/login')
  // async login(@Request() req) {
  //   return this.authService.login(req.user);
  // }

  @UseFilters(new HttpExceptionFilter())
  @UseGuards(AuthGuard('jwt'))
  @Get('/')
  @Render('index')
  getProfile(@Req() req, @Res() res) {}
}
