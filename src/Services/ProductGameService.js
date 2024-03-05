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
    }


    async ALLProducts() {
        const Products = await this.repositoryProductGame.FindAllGames();
    
        if (Products === null) {
            return { message: "Nenhum resultado Encontrado" };
        }
    
        const productsWithShops = [];
    
        for (const product of Products) {
            const gameId = product.id;
            const gameShops = await this.repositoryGameofShop.FindOneGame(gameId);
            const GameForPlataform = await this.repositoryJogosPlataformas.findAllByGameId(gameId);
            const shops = [];
            const Plataforms = [];
    
            for (const gameShop of gameShops) {
                const shopId = gameShop.loja_id;
                const shop = await this.repositoryshop.FindOneShop(shopId);
                if (shop !== null) {
                    shops.push(shop.nome);
                }
            }
    
            for (const GameForPlataforms of GameForPlataform) {
                const Gameid = GameForPlataforms.plataforma_id;
                const game = await this.repositoryPlataformas.findById(Gameid);
                if (game !== null) {
                    Plataforms.push(game.nome);
                }
            }
    
            
            productsWithShops.push({ game: product, shops, Plataforms });
        }
    
        return productsWithShops;
    }
    
    
    async createProducts(nome, descricao_jogo, file, price){
        try {
              const CaminhoImg = file.path;
              
              const produto = await this.repositoryProductGame.CreateGame(nome, descricao_jogo, CaminhoImg, price);
              return produto;
          } catch (error) {
            throw error;
          }
    }

    async OneProduct(id){
        const Product = await this.repositoryProductGame.FindOneGame(id);

        if(Product >= null){
            return {message: "Nenhum resultado Encontrado"}
        }
        return Product;
    }

}