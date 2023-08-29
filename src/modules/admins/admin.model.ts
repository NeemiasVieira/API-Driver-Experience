import { Column, Model, Table } from 'sequelize-typescript';

//This entity will be implemented later

@Table
export class Admin extends Model {
  @Column
  username: string;

  @Column
  email: string;

  @Column
  password: string;

}
