import { AuthService } from '../auth/auth.service';

export const loginProviders = [
  {
    provide: 'LOGIN_REPOSITORY',
    useValue: AuthService,
  },
];
