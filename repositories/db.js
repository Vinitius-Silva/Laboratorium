import { Sequelize } from 'sequelize';

//const database = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

const database = new Sequelize('Laboratorium', 'postgres', '', {
    host: 'localhost',
    dialect: 'postgres',
    define: {
      freezeTableName: true
    }
  });
  
 export default database;