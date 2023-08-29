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

  @Column(DataType.ARRAY(DataType.STRING))
  features: string[];

  @HasMany(() => Reserve)
  reserves?: Reserve[] = [];

  @Column
  get status(): string {
  const confirmedReserves = this.reserves.filter(reserve => new Date(reserve.startDate) <= new Date() && new Date() <= new Date(reserve.endDate));

  if (confirmedReserves.length > 0) {

      //Check the other non-conflicting bookings the car has

      const statusDetails = confirmedReserves.map(reserve => {
      const startDate = new Date(reserve.startDate);
      const endDate = new Date(reserve.endDate);
      const startDateFormatted = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit' }).format(startDate);
      const endDateFormatted = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit' }).format(endDate);
      const startTimeFormatted = new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit' }).format(startDate);
      const endTimeFormatted = new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit' }).format(endDate);
      
      return `Reserved on days ${startDateFormatted} from ${endDateFormatted} until ${startTimeFormatted} ultil ${endTimeFormatted}`;
    }).join(', ');

    return `Reserved on dates: ${statusDetails}`;
  }

  return 'Available';
}

  
}
