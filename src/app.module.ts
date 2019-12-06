import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './user/user.module';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { LoginModule } from './login/login.module';
import { RegistrationController } from './registration/registration.controller';
import { RegistrationService } from './registration/registration.service';
import { RegistrationModule } from './registration/registration.module';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  imports: [UsersModule, AuthModule, LoginModule, RegistrationModule],
  controllers: [AppController, RegistrationController],
  providers: [AppService, RegistrationService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('');
  }
}
