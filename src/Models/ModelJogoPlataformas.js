import conn from "./Data/db.js";
import { Sequelize } from "sequelize";
import Jogo from "./ModelJogos.js";
import Plataformas from "./ModelPlataform.js";

const JogosPlataformas = conn.define('jogos_plataformas',{

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
    plataforma_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Plataformas,
            key: 'id'
        }
    }
}, {
    timestamps: true
});
   

export default JogosPlataformas;





