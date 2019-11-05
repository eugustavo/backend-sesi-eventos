const mongoose = require('mongoose');

const CategoriaSchema = new mongoose.Schema({
    nome: String
});

module.exports = mongoose.model('Categoria', CategoriaSchema);