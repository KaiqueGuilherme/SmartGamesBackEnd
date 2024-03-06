import PlayerPurchase from "../Models/ModelComprasGames";

export default class GamesByRepository {

        async firstBuyGamePurchaseCreate(id_jogo, name_comprador, data_Compra, id_loja, id_cupom){
            try{
                const BuyGame = PlayerPurchase.create({
                    jogo_id: id_jogo,
                    nome_do_comprador: name_comprador,
                    data_da_compra: data_Compra,
                    loja_id: id_loja,
                    cupom_id: id_cupom
                });
                return BuyGame;
            }catch{
                console.error('Erro ao cadastrar compra:', error);
                throw error;
            }
        }

}   