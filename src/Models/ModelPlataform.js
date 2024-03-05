import conn from "./Data/db.js";
import { Sequelize } from "sequelize";

const Plataformas = conn.define('plataformas',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});

export default Plataformas;




