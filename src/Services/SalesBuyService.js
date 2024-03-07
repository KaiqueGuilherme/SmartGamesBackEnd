import CompradorRepository from "../Repositories/CompradoresRepositorory.js";
import CupomRepository from "../Repositories/CuponsDescontoRepository.js";
import ProductGameShop from "../Repositories/JogoLojasRepository.js";
import ShopRepository from "../Repositories/LojasRepository.js";
import ProductGameRepository from "../Repositories/ProductGameRepository.js";
import GamesByRepository from "../Repositories/SalesBUYRepositories.js";

export default class ServiceCompras {
        constructor() {
            this.compradorRepository = new CompradorRepository();
            this.comprasRepository = new GamesByRepository();
            this.cupomRepository = new CupomRepository();
            this.repositoryGameShop = new ProductGameShop();
            this.repositoryProductGame = new ProductGameRepository();
            this.repositoryGameofShop = new ProductGameShop();
            this.repositoryshop = new ShopRepository();
        } 

        async createOrders(nome, email, endereco, telefone, jogoIds, cupom_id) {
            try {
                const newComprador = await this.compradorRepository.createComprador(nome, email, endereco, telefone);
                console.log(newComprador);
                if (!newComprador) {
                    throw new Error('Erro ao criar comprador');
                }
        
                const cupom = await this.cupomRepository.FindByID(cupom_id);
                if (!cupom) {
                    throw new Error('Cupom não encontrado');
                }
        
                const jogosComDesconto = [];
                let valorTotal = 0;

                for (const jogoId of jogoIds) {
                    const id = jogoId.id;
                    const Product = await this.repositoryProductGame.FindOneGame(id);
                    const precoOriginal = parseFloat(Product.preco);
                    const descontoIndividual = precoOriginal * (cupom.desconto / 100);
                    const precoComDesconto = precoOriginal - descontoIndividual;
        
                    valorTotal += precoComDesconto;
        
                    jogosComDesconto.push({
                        id: jogoId.id,
                        precoComDesconto: precoComDesconto
                    });
                }
                 console.log(jogosComDesconto);
                const newOrders = [];
                for (const jogo of jogosComDesconto) {
                    const jogoid = jogo.id;
                    const Desconto = jogo.precoComDesconto;
        
                    const newOrder = await this.comprasRepository.firstBuyGamePurchaseCreate(newComprador.id, jogoid, Desconto, cupom_id);
                    newOrders.push(newOrder);
                }
        
                return { newComprador, newOrders, valorTotal: valorTotal };
            } catch (error) {
                console.error('Erro ao criar compras:', error);
                throw error;
            }
        }
        

    
    
}

