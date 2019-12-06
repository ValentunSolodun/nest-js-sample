import { Sequelize } from 'sequelize-typescript';
import { UserEntity } from '../user/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '12345',
        database: 'drag_drop_sequelize',
      });
      sequelize.addModels([UserEntity]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
