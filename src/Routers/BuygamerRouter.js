import express from 'express';
import ServiceCompras from '../Services/BuygameService.js';

const BuyRouter = express.Router();

const controllerCompras = new ServiceCompras();


BuyRouter.post('/criarCompra', controllerCompras.createOrders);



export default BuyRouter;