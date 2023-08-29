import { Sequelize } from 'sequelize-typescript';
import { Client } from 'src/modules/clients/client.model';
import { Reserve } from 'src/modules/reserves/reserve.model';
import { Car } from 'src/modules/cars/car.model';
import pg from 'pg';

//Database config
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
        dialectModule: pg, //Required for deploy using vercel
        dialectOptions: { //Required to use a PostgreSQL database on Azure
          ssl: {
            require: true,
          }
        }
      });

      //Load Models from project
      sequelize.addModels([Client, Reserve, Car])      
      await sequelize.sync();

      //Test database connection
      try {
        await sequelize.authenticate();
        console.log('Database connection successfully established 🚀');
      } catch (error) {
        console.error('Database connection failed', error);
      }
    },
  },
];