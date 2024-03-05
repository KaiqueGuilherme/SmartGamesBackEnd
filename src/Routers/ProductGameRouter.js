import express from 'express';
import ControllerGames from '../Controllers/ProductGameController.js';
import upload from '../Config/multer.js';



const GamesRouter = express.Router();

const controllerGames = new ControllerGames();


GamesRouter.get('/jogos', controllerGames.getALLProducts);
GamesRouter.get('/jogos/id=:id', controllerGames.getProductOne);
GamesRouter.get('/jogos/name=:name', controllerGames.getProductOneName);
GamesRouter.get('/CreateProduct',upload.single("file"), controllerGames.SetterOneProduct);

export default GamesRouter;