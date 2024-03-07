import express from 'express';
import ComprasController from '../Controllers/ByGameController.js';


const CupomRouter = express.Router();

const controllerFinance = new ComprasController();


CupomRouter.post('/criarCompra', controllerFinance.createOrder);




export default CupomRouter;