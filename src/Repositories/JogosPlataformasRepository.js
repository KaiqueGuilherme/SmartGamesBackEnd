import JogosPlataformas from "../Models/ModelJogoPlataformas.js";

class JogosPlataformasRepository {

    async findAllByGameId(id_jogo) {
        try {
            const jogosPlataformas = await JogosPlataformas.findAll({ where: { jogo_id: id_jogo } });
            return jogosPlataformas;
        } catch (error) {
            throw new Error(`Erro ao encontrar plataformas do jogo: ${error}`);
        }
    }
}

export default JogosPlataformasRepository;
