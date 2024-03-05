import ServiceProductGame from "../Services/ProductGameService.js";

export default class ControllerGames{

    constructor() {
        this.serviceGame = new ServiceProductGame();

    this.getALLProducts = async (req, res, next) => {
            try{
            const ALLProducts = await this.serviceGame.ALLProducts();
            
            res.status(200).json({message: "Lista de produtos:", ALLProducts});
            }catch(error){
                console.error('Erro ao obter dados:', error);
                
                res.status(500).json({ error: 'erro ao obter' });
            }
    }    


    this.SetterOneProduct = async (req, res, next) => {
        const {nome, descricao_jogo, price } = req.body;
        const file = req.file;
        try{
        const PostFiles = await this.serviceGame.createProducts(nome, descricao_jogo, file, price  );
        
        res.status(200).json({message: "Produto criando:", PostFiles});
        }catch(error){
            console.error('Erro ao obter dados:', error);
            
            res.status(500).json({ error: 'erro ao obter' });
        }
    }    

    this.getProductOne = async (req, res, next) => {
        const id = req.params.id;

        try{
        const ProductOne = await this.serviceGame.OneProduct(id);
        res.status(200).json({message: "Produto Selecionado:", ProductOne});
        }catch(error){
            console.error('Erro ao obter dados:', error);
            
            res.status(500).json({ error: 'erro ao obter' });
        }
    }    


}
    
}