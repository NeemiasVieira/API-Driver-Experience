import { Sequelize } from 'sequelize-typescript';
import { Admin } from 'src/modules/admins/admin.model';
import { Client } from 'src/modules/clients/client.model';
import { Reserve } from 'src/modules/reserves/reserve.model';
import { Car } from 'src/modules/cars/car.model';
import pg from 'pg';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.HOST,
        port: 5432, 
        username: process.env.USER,
        password: process.env.PASSWORD,
        database: 'postgres',
        dialectModule: pg, //Necessário para o deploy na vercel
        dialectOptions: { //Necessário para usar o servidor Postgre no Azure
          ssl: {
            require: true,
          }
        }
      });
      sequelize.addModels([Admin, Client, Reserve, Car])
      await sequelize.sync();
      try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso 🚀');
      } catch (erro) {
        console.error('Conexão com o banco de dados falhou', erro);
      }
    },
  },
];