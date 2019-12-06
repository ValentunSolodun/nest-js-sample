import { Table, Column, Model , CreatedAt, UpdatedAt} from 'sequelize-typescript';

@Table({tableName: 'users'})
export class UserEntity extends Model<UserEntity> {
  @Column
  name: string;

  @Column
  email: string;

  @Column
  password: string;

  @CreatedAt public createdAt: Date;

  @UpdatedAt public updatedAt: Date;
}
