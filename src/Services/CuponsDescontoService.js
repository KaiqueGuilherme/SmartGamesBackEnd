import qrCode from 'qrcode';
import CupomRepository from '../Repositories/CuponsDescontoRepository.js';

class CupomService {
  constructor() {
    this.cupomRepository = new CupomRepository();
  }

  async createCupom(codigo, desconto) {
    try {
      const cupom = await this.cupomRepository.createCupom(codigo, desconto);
      return cupom;
    } catch (error) {
      throw new Error(`Erro ao criar cupom: ${error}`);
    }
  }

  async getCupomByCodigo(codigo) {
    try {
      const cupom = await this.cupomRepository.getCupomByCodigo(codigo);
      return cupom;
    } catch (error) {
      throw new Error(`Erro ao buscar cupom pelo código: ${error}`);
    }
  }

}

export default CupomService;
