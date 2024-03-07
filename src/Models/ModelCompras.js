import conn from "./Data/db.js";
import { Sequelize } from "sequelize";

const PlayerPurchase  = conn.define('compras', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    comprador_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    jogo_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    valor: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
    },
    cupom_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
    }
}, {
    timestamps: true,
});

export default PlayerPurchase;
