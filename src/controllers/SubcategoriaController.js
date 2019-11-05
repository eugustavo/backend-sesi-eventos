const Subcategoria = require('../models/Subcategoria');

module.exports = {
    async index (req, res){
        const subcategorias = await Subcategoria.find();

        return res.json(subcategorias);
    },

    async store (req, res){
        const { nome } = req.body;
        const { cat_id } = req.headers;

        const subcategoria = await Subcategoria.create({
            nome: nome,
            categoria: cat_id
        });

        await subcategoria.populate('categoria').execPopulate();

        return res.json(subcategoria);
    },

    async update (req, res){
        const { nome } = req.body;
        const { sub_id, cat_id } = req.headers;

        const subcategoria = await Subcategoria.findByIdAndUpdate({_id: sub_id}, {
            nome: nome,
            categoria: cat_id,
        })

        return res.json(subcategoria);
    },

    async destroy (req, res){
        const { sub_id } = req.headers;

        await Subcategoria.findByIdAndDelete({_id: sub_id});

        return res.status(200).json({ message: 'Subcategoria deletada!'});
    }
}