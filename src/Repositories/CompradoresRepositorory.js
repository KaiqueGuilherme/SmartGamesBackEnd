import Comprador from "../Models/ModelCompradores.js";


class CompradorRepository {
    async createComprador(nome, email, endereco, telefone) {
        try {
            const comprador = await Comprador.create({ nome, email, endereco, telefone });
            return comprador;
        } catch (error) {
            throw new Error(`Erro ao criar comprador: ${error}`);
        }
    }

    async getCompradorById(id) {
        try {
            const comprador = await Comprador.findByPk(id);
            return comprador;
        } catch (error) {
            throw new Error(`Erro ao buscar comprador pelo ID: ${error}`);
        }
    }
}

export default CompradorRepository;
