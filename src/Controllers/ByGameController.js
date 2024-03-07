import ServiceCompras from "../Services/SalesBuyService.js";


export default class ComprasController {
    constructor() {
        this.serviceCompras = new ServiceCompras();
  
   this.createOrder = async (req, res) => {
    const { nome, email, endereco, telefone, jogoIds, cupom_id } = req.body;
    try { 
        const Buy = await this.serviceCompras.createOrders(nome, email, endereco, telefone, jogoIds, cupom_id);
        res.status(201).json(Buy);
    } catch (error) {
        console.error('Erro ao criar ordem de compra:', error);
        res.status(500).json({ error: 'Erro ao processar a solicitação' });
    }
    }
}
}