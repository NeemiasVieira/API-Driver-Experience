import { Column, Model, Table, HasMany } from 'sequelize-typescript';
import { Reserve } from '../reserves/reserve.model';

@Table
export class Client extends Model {
  @Column
  username: string;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  driverLicenseNumber: string;

  @Column
  fullName: string;

  @Column
  phoneNumber: string;

  @HasMany(() => Reserve)
  reserves: Reserve[] = [];

}

