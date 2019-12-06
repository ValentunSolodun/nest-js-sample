import { Injectable } from '@nestjs/common';

@Injectable()
export class RegistrationService {
  getTitle(): object {
    return {title: 'Registration'};
  }
}
