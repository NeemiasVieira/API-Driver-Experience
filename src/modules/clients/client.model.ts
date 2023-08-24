import { Column, Model, Table, HasMany } from 'sequelize-typescript';
import { Reserve } from '../reserves/reserve.model';

export interface UserClient {
    username: string;
    email: string;
    password: string;
    driverLicenseNumber: string;
    fullName: string;
    phoneNumber: string;
    reserves?: Reserve[]; 
  }

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
  fullName: string; // Nome completo do cliente

  @Column
  phoneNumber: string; // Número de telefone do cliente

  @HasMany(() => Reserve)
  reserves?: Reserve[];

  // ... (outros campos, se houver)
}

