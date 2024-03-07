import Cupom from '../Models/ModelCupons.js';

class CupomRepository {
  async createCupom(codigo, desconto) {
    try {
        const cupom = await Cupom.create({
            codigo: codigo,
            desconto: desconto
          });
      return cupom;
    } catch (error) {
      throw new Error(`Erro ao criar cupom: ${error}`);
    }
  }

  async getCupomByCodigo(codigo) {
    try {
      const cupom = await Cupom.findOne({ where: { codigo } });
      return cupom;
    } catch (error) {
      throw new Error(`Erro ao buscar cupom pelo código: ${error}`);
    }
  }

  async FindByID(id) {
    try {
        const FindCupom = await Cupom.findByPk(id);
        return FindCupom;
    } catch (error) {
        console.error('Erro ao encontrar o cupon:', error);
        throw error;
    }
}
}

export default CupomRepository;
