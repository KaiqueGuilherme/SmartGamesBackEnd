import conn from "./Data/db.js";
import { Sequelize } from "sequelize";

const Comprador = conn.define('compradores', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING
    },
    telefone: {
        type: Sequelize.STRING
    }
}, {
    timestamps: true
});

export default Comprador;
