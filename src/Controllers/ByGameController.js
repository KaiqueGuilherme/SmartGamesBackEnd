import ServiceCompras from "../Services/BuygameService.js";



export default class ComprasController {
    constructor() {
        this.serviceCompras = new ServiceCompras();
  
   this.createOrder = async (req, res) => {
    const { nome, email, endereco, telefone, comprador_id, jogos, loja_id, cupom_id } = req.body;
    try { 
        const { newComprador, newOrders, valorTotal, valorFinal } = await this.serviceCompras.createOrders(nome, email, endereco, telefone, comprador_id, jogos, loja_id, cupom_id);

        res.status(201).json({ newComprador, newOrders, valorTotal, valorFinal });
    } catch (error) {
        console.error('Erro ao criar ordem de compra:', error);
        res.status(500).json({ error: 'Erro ao processar a solicitação' });
    }
    }
}
}