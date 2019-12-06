import { Injectable, Inject } from '@nestjs/common';
import { UserEntity } from './user.entity';

// export type User = any;

class PostRegister {
  readonly name: string;
  readonly email: string;
  readonly password: string;
}

@Injectable()
export class UsersService {
  constructor(@Inject('USERS_REPOSITORY') private readonly Users: typeof UserEntity) {
  }

  async findOne(email: string): Promise<UserEntity | undefined> {
    return this.Users.findOne<UserEntity>({ where: { email } });
  }

  async createUser(data: PostRegister): Promise<any> {
    const newUser = new UserEntity();
    newUser.name = data.name;
    newUser.email = data.email;
    newUser.password = data.password;
    newUser.save();
  }
}
