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
  const reservedReserves = this.reserves.filter(reserve => reserve.startDate <= new Date() && new Date() <= reserve.endDate);

  if (reservedReserves.length > 0) {
    const statusDetails = reservedReserves.map(reserve => {
      const startDateFormatted = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit' }).format(reserve.startDate);
      const endDateFormatted = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit' }).format(reserve.endDate);
      const startTimeFormatted = new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit' }).format(reserve.startDate);
      const endTimeFormatted = new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit' }).format(reserve.endDate);
      
      return `Reserved on days ${startDateFormatted} from ${endDateFormatted} until ${startTimeFormatted} até as ${endTimeFormatted}`;
    }).join(', ');

    return `Reserved on dates: ${statusDetails}`;
  }

  return 'Disponível';
}

  
}
