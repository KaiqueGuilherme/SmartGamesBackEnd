import ProductGameRepository from "../Repositories/ProductGameRepository.js";

export default class ServiceProductGame {

    constructor() {
        this.repositoryProductGame = new ProductGameRepository();
    }

    async ALLProducts(){
        const Products = await this.repositoryProductGame.FindAllGames();
        if(Products >= null){
            return {message: "Nenhum resultado Encontrado"}
        }

        return Products;
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