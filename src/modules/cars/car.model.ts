import { Column, Model, Table, HasMany, DataType } from 'sequelize-typescript';
import { Reserve } from '../reserves/reserve.model';

@Table
export class Car extends Model {
  @Column
  model: string;

  @Column
  plateNumber: string;

  @Column
  year: number;

  @Column
  isAutomatic: boolean;

  @Column
  carType: string;

  @Column
  color: string;

  @Column
  fuelEfficiency: number;

  @Column
  dailyRate: number;

  @Column(DataType.ARRAY(DataType.STRING))
  images: string[]; // Array de URLs das imagens

  @Column('json')
  features: { [key: string]: boolean }; // Exemplo: { airConditioning: true, bluetooth: false }

  @HasMany(() => Reserve)
  reserves: Reserve[];

  @Column
  get status(): string {
    if (this.reserves.some(reserve => reserve.startDate <= new Date() && new Date() <= reserve.endDate)) {
      return 'alugado';
    }
    return 'disponível';
  }
}
