import PlayerPurchase from "../Models/ModelComprasGames.js";

    export default class GamesByRepository {
        async firstBuyGamePurchaseCreate(comprador_id, jogo_id, loja_id, precoComDesconto, cupom_id, data_da_compra) {
            try {
                const buyGame = await PlayerPurchase.create({
                    comprador_id: comprador_id,
                    jogo_id: jogo_id,
                    loja_id: loja_id,
                    valor: precoComDesconto,
                    cupom_id: cupom_id,
                    data_da_compra: data_da_compra
                });
                return buyGame;
            } catch (error) {
                console.error('Erro ao cadastrar compra:', error);
                throw error;
            }
        }
    
        async getPurchaseById(id) {
            try {
                const purchase = await PlayerPurchase.findByPk(id);
                return purchase;
            } catch (error) {
                console.error('Erro ao buscar compra pelo ID:', error);
                throw error;
            }
        }
    
    
        async deletePurchaseById(id) {
            try {
                const purchase = await PlayerPurchase.findByPk(id);
                if (purchase) {
                    await purchase.destroy();
                    return { message: `Compra com ID ${id} excluída com sucesso.` };
                } else {
                    throw new Error(`Compra com ID ${id} não encontrada.`);
                }
            } catch (error) {
                console.error('Erro ao excluir compra:', error);
                throw error;
            }
        }
    }