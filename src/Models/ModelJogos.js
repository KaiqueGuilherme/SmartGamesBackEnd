import conn from "./Data/db.js";
import { Sequelize } from "sequelize";

const Jogo = conn.define('jogos',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome_do_jogo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING,
      },
      link_da_imagem: {
        type: Sequelize.STRING,
      },
      preco: {
        type: Sequelize.DECIMAL(10, 2),
      }
},{
  timestamps: true,
});

export default Jogo;
