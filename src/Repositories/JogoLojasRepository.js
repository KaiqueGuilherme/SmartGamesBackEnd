import JogosLojas from "../Models/ModelJogoLojas";

export default class ProductGameRepository {

    async FindOneGame(id_jogo){
        try {
            const FindGameShop = JogosLojas.findByPk(id_jogo);
        return [FindGameShop];
          } catch (error) {
            console.error('Erro ao encontrar o Jogo na loja:', error);
            throw error;
          }
    }



}