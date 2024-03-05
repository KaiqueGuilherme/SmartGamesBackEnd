import Loja from "../Models/ModelLojas.js";


export default class ShopRepository {

    async FindOneShop(id){
        try {
            const FindShop = Loja.findByPk(id);
        return FindShop;
          } catch (error) {
            console.error('Erro ao encontrar jogo:', error);
            throw error;
          }
        
    }

    async FindAllShop(){
        try {
            const FindAllShop = Loja.findAll(id);
        return FindAllShop;
          } catch (error) {
            console.error('Erro ao encontrar jogo:', error);
            throw error;
          }
        
    }


}