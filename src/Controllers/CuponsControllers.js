import CupomService from "../Services/CuponsDescontoService.js";


export default class CupomController {
  constructor() {
    this.cupomService = new CupomService();
 

  this.createCupom = async (req, res) => {
    const { codigo, desconto } = req.body;
    try {
      const cupom = await this.cupomService.createCupom(codigo, desconto);
      
      return res.status(201).json({ message: 'Cupom criado com sucesso', cupom });
   
    } catch (error) {
      console.error('Erro ao criar cupom:', error);
      return res.status(500).json({ error: 'Erro ao criar cupom' });
    }
  }

  this.getCupomByCodigo = async  (req, res) => {
    const { codigo } = req.body;
    try {
      const cupom = await this.cupomService.getCupomByCodigo(codigo);
      if(cupom === null){
        return res.status(201).json({ message: 'Cupom invalido'});
      }
      return res.status(200).json({ cupom });
    } catch (error) {
      console.error('Erro ao buscar cupom pelo código:', error);
      return res.status(500).json({ error: 'Erro ao buscar cupom' });
    }
  }

}
}

