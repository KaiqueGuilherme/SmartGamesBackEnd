import Plataformas from "../Models/ModelPlataform.js";



class PlataformasRepository {
     async findAll() {
        try {
            const plataformas = await Plataformas.findAll();
            return plataformas;
        } catch (error) {
            throw new Error(`Erro ao encontrar plataformas: ${error}`);
        }
    }

     async findById(plataformaId) {
        try {
            const plataforma = await Plataformas.findByPk(plataformaId);
            return plataforma;
        } catch (error) {
            throw new Error(`Erro ao encontrar plataforma pelo ID: ${error}`);
        }
    }
}

export default PlataformasRepository;
