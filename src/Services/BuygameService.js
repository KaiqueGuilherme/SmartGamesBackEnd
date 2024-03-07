import GamesByRepository from '../Repositories/ByGamerRepository.js';
import CompradorRepository from '../Repositories/CompradoresRepositorory.js';
import CupomRepository from '../Repositories/CuponsDescontoRepository.js';
import ProductGameShop from '../Repositories/JogoLojasRepository.js';

export default class ServiceCompras {
    constructor() {
        this.compradorRepository = new CompradorRepository();
        this.comprasRepository = new GamesByRepository();
        this.cupomRepository = new CupomRepository();
        this.repositoryGameShop = new ProductGameShop();
    }

    async createOrders(nome, email, endereco, telefone, comprador_id, jogos, loja_id, cupom_id) {
        try {
            for (const jogo of jogos) {
                const isGameAvailable = await this.repositoryGameShop.FindOneGame(loja_id, jogo.id);
                if (!isGameAvailable) {
                    throw new Error(`O jogo ${jogo.nome} não está disponível nesta loja.`);
                }
            }

            const cupom = await this.cupomRepository.getCupomById(cupom_id);
            if (!cupom) {
                throw new Error('Cupom não encontrado');
            }

            const newComprador = await this.compradorRepository.createComprador(nome, email, endereco, telefone);
            if (!newComprador) {
                throw new Error('Erro ao criar comprador');
            }

            const valorTotal = jogos.reduce((total, jogo) => total + jogo.preco, 0);

            const valorDescontoPorJogo = cupom.desconto / 100 / jogos.length;
            const jogosComDesconto = jogos.map(jogo => ({
                ...jogo,
                precoComDesconto: jogo.preco - (jogo.preco * valorDescontoPorJogo)
            }));

            const newOrders = [];
            for (const jogo of jogosComDesconto) {
                const data_da_compra = new Date();
                const newOrder = await this.comprasRepository.firstBuyGamePurchaseCreate(comprador_id, jogo.id, loja_id, jogo.precoComDesconto, cupom_id, data_da_compra);
                newOrders.push(newOrder);
            }

            return { newComprador, newOrders, valorTotal, valorFinal: valorTotal - (valorTotal * cupom.desconto / 100) };
        } catch (error) {
            console.error('Erro ao criar compras:', error);
            throw error;
        }
    }
}

