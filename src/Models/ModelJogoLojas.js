import conn from "./Data/db.js";
import { Sequelize } from "sequelize";

const JogosLojas = conn.define('jogos_lojas', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    jogo_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'jogos',
            key: 'id'
        }
    },
    loja_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'lojas',
            key: 'id'
        }
    }
}, {
    timestamps: true
});

export default JogosLojas;
