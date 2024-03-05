import JogosLojas from "../Models/ModelJogoLojas.js";

export default class ProductGameShop {

  async FindOneGame(id_jogo) {
    try {
        const FindGameShop = await JogosLojas.findAll({ where: { jogo_id: id_jogo } });
        return FindGameShop;
    } catch (error) {
        console.error('Erro ao encontrar o Jogo na loja:', error);
        throw error;
    }
}
}