import  express  from "express";
import GamesRouter from "./src/Routers/ProductGameRouter.js";

export function CreateServer() {
    const Server = express();

    Server.use(express.json());
    Server.use('/games', GamesRouter)

    return Server;
}