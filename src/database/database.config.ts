import { Sequelize } from 'sequelize-typescript';
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
      sequelize.addModels([])
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