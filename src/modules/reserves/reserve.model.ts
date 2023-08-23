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
  startDate: Date;

  @Column
  endDate: Date;

  @Column
  totalCost: number; // Custo Total da Reserva

  @Column
  status: string; // Status da Reserva (pendente, confirmada, cancelada, etc.)

  // ... (outros campos, se houver)

  @BelongsTo(() => Client)
  client: Client;

  @BelongsTo(() => Car)
  car: Car;
}
