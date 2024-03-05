import Jogo from "../Models/ModelJogos.js";

export default class ProductGameRepository {

    async FindAllGames(){
        const FindAllProduct = Jogo.findAll();
        return FindAllProduct;
    }

    async FindOneGame(id){
        try {
            const FindOneProduct = Jogo.findByPk(id);
        return FindOneProduct;
          } catch (error) {
            console.error('Erro ao encontrar jogo:', error);
            throw error;
          }
        
    }

    async getproductbyname(name){
        try {
        const fingByname = await Jogo.findAll({ where: { nome_do_jogo: name } });
        return fingByname;
          } catch (error) {
            console.error('Erro ao encontrar jogo:', error);
            throw error;
          }
        
    }



    async CreateGame(nome, descricao_jogo, CaminhoImg, Price){
       try{
        const CreateJogo = Jogo.create({
            nome_do_jogo: nome,
            descricao: descricao_jogo,
            link_da_imagem: CaminhoImg,
            preco: Price,
        });
        return CreateJogo;
        } catch (error) {
            console.error('Erro ao criar jogo:', error);
            throw error;
        }
     }

     async DeleteGame(id){
        try{
         const DestroyGame = Jogo.destroy(id);
         return DestroyGame;
         } catch (error) {
             console.error('Erro ao deletar jogo:', error);
             throw error;
         }
      }

      async AlterGame(id, nome, descricao_jogo, CaminhoImg, Price){
        try{
         
            const jogo = await Jogo.findByPk(id);

             nome_do_jogo = nome,
             descricao = descricao_jogo,
             link_da_imagem = CaminhoImg,
             preco = Price

             jogo.save();

         return jogo;
         } catch (error) {
             console.error('Erro ao editar o jogo:', error);
             throw error;
         }
      }


}