const Acao = require('../models/Acao');

module.exports = {
    async store (req, res){
        const { nome, cpf, sexo } = req.body;
        const { cat_id, sub_id } = req.headers;

        const acao = await Acao.create({
            nome: nome,
            cpf: cpf,
            sexo: sexo,
            categoria: cat_id,
            subcategoria: sub_id,
        });

        await acao.populate('categoria').populate('subcategoria').execPopulate();

        return res.json(acao);
    }
}