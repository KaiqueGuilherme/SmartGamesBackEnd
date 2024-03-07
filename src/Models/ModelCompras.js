import conn from "./Data/db.js";
import { Sequelize } from "sequelize";

const PlayerPurchase  = conn.define('compradores_jogos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    jogo_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    nome_do_comprador: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    data_da_compra: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
    },
    loja_id: {
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
