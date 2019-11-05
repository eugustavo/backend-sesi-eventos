const mongoose = require('mongoose');

const SubcategoriaSchema = new mongoose.Schema({
    nome: String,
    categoria: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categoria',
    },
});

module.exports = mongoose.model('Subcategoria', SubcategoriaSchema);