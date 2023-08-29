import { Column, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Car } from '../cars/car.model';
import { Client } from '../clients/client.model';
@Table
export class Reserve extends Model {
  @ForeignKey(() => Client)
  @Column
  clientId: number;

  @ForeignKey(() => Car)
  @Column
  carId: number;

  @Column
  startDate: string;

  @Column
  endDate: string;

  @Column 
  totalDays: number;

  @Column
  totalCost: number;

  @Column
  status: string; 



  @BelongsTo(() => Client)
  client: Client;

  @BelongsTo(() => Car)
  car: Car;
}
