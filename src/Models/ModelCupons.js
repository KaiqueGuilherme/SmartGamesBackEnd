import { Sequelize } from 'sequelize';
import conn from './Data/db.js';

const Cupom = conn.define('cupons', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  codigo: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  qr_code: {
    type: Sequelize.STRING,
  },
}, {
  timestamps: true,
});

export default Cupom;
