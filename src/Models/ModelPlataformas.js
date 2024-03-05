import { Sequelize } from 'sequelize';
import conn from './Data/db.js';

const Plataforma = conn.define('plataformas', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  timestamps: true,
});

export default Plataforma;
