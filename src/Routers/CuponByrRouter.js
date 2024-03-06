import express from 'express';
import CupomController from '../Controllers/CuponsControllers.js';



const CupomRouter = express.Router();

const controllerCupom = new CupomController();


CupomRouter.post('/criarcupon', controllerCupom.createCupom);
CupomRouter.get('/codigo', controllerCupom.getCupomByCodigo);



export default CupomRouter;