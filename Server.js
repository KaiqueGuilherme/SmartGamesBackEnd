import  express  from "express";
import GamesRouter from "./src/Routers/ProductGameRouter.js";
import CupomRouter from "./src/Routers/CuponByrRouter.js";

export function CreateServer() {
    const Server = express();

    Server.use(express.json());
    Server.use('/games', GamesRouter);
    Server.use('/cupons', CupomRouter)

    return Server;
}