import GamesByRepository from "../Repositories/ByGamerRepository.js";
import ProductGameShop from "../Repositories/JogoLojasRepository.js";
import JogosPlataformasRepository from "../Repositories/JogosPlataformasRepository.js";
import ShopRepository from "../Repositories/LojasRepository.js";
import PlataformasRepository from "../Repositories/PlataformasRepository.js";
import ProductGameRepository from "../Repositories/ProductGameRepository.js";

export default class ServiceProductGame {

    constructor() {
        this.repositoryProductGame = new ProductGameRepository();
        this.repositoryGameofShop = new ProductGameShop();
        this.repositoryshop = new ShopRepository();
        this.repositoryJogosPlataformas = new JogosPlataformasRepository();
        this.repositoryPlataformas = new PlataformasRepository();
        this.repositoryGameOrder = new GamesByRepository();
    }


    async createOrder(id_jogo, name_comprador, data_Compra, id_loja, id_cupom) {
        const game = await this.repositoryProductGame.FindOneGame(id_jogo)

        if(game == null){
             
        }


    }
    
    




    
}