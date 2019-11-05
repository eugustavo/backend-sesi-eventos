const Categoria = require('../models/Categoria');

module.exports = {
    async index (req, res) {
        const categorias = await Categoria.find();

        return res.json(categorias);
    },

    async store (req, res) {
        const { nome } = req.body;

        const categoria = await Categoria.create({
            nome: nome
        })

        return res.json(categoria);
    },

    async update (req, res){
        const { nome } = req.body;
        const { cat_id } = req.headers;

        const categoria = await Categoria.findByIdAndUpdate({_id: cat_id}, {nome: nome});

        return res.json(categoria);
    },

    async destroy (req, res){
        const { cat_id } = req.headers;

        await Categoria.findByIdAndDelete({ _id: cat_id});

        return res.status(200).json({ ok:'Categoria deletada!'});
    }
    
}