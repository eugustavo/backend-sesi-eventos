const mongoose = require('mongoose');

const AcaoSchema = new mongoose.Schema({
    nome: String,
    cpf: String,
    sexo: String,
    categoria: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categoria'
    },
    subcategoria: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subcategoria'
    }
});

module.exports = mongoose.model('Acao', AcaoSchema);