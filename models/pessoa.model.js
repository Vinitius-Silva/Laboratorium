import { Sequelize } from 'sequelize';
import database from '../repositories/db.js';

const modelPessoa = database.define('Pessoas', {
    idPessoa:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nmPessoa:{
        type: Sequelize.STRING,
        allowNull: false
    },
    emailPessoa:{
        type: Sequelize.STRING,
        allowNull: true
    },
    telefonePessoa:{
        type: Sequelize.STRING,
        allowNull: true
    },
    unidadeOperacional:{
        type: Sequelize.STRING,
        allowNull: true
    },
    cpfPessoa:{
        type: Sequelize.STRING,
        allowNull: true
    },
    cargo:{
        type: Sequelize.STRING,
        allowNull: true
    }
}, 
{ underscored: true
})

export default modelPessoa;