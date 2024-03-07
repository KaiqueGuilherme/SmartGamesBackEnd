import PlayerPurchase from "../Models/ModelCompras.js";

class GamesByRepository {
    async firstBuyGamePurchaseCreate(id, jogoid, Desconto, cupom_id) {
                    try {
                        const buyGame = await PlayerPurchase.create({
                            comprador_id: id,
                            jogo_id: jogoid,
                            valor: Desconto,
                            cupom_id: cupom_id
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

export default GamesByRepository;