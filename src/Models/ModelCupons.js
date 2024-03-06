import { Sequelize } from 'sequelize';
import conn from './Data/db.js';

const Cupom = conn.define('cupons', {
  id_Cupons: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
},
codigo: {
    type: Sequelize.STRING,
    allowNull: false
},
desconto: {
    type: Sequelize.DECIMAL(5, 2),
    allowNull: false
},

}, {
  timestamps: true,
});

export default Cupom;
