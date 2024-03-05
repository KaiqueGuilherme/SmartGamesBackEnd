import { Sequelize } from "sequelize";

 const conn = new Sequelize('smartgame', 'root', '' ,{
    dialect: 'mysql',
    host: 'localhost'
})

export default conn;