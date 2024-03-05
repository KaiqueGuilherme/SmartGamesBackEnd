import { Sequelize } from 'sequelize';
import conn from './Data/db.js';

const Lojas = conn.define('lojas', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
},{
  timestamps: true,
});

export default Lojas;
