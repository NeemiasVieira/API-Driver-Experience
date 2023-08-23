import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Admin extends Model {
  @Column
  username: string;

  @Column
  email: string;

  @Column
  password: string;

}
