const express = require('express');
const routes = express.Router();


const CategoriaController = require('./controllers/CategoriaController');
const SubcategoriaController = require('./controllers/SubcategoriaController');
const AcaoController = require('./controllers/AcaoController');


//Rotas para Categoria
routes.get('/categorias', CategoriaController.index);
routes.post('/categoria', CategoriaController.store);
routes.put('/categoria', CategoriaController.update);
routes.delete('/categoria', CategoriaController.destroy);

//Rotas para Subcategoria
routes.get('/subcategorias', SubcategoriaController.index);
routes.post('/subcategoria', SubcategoriaController.store);
routes.put('/subcategoria', SubcategoriaController.update);
routes.delete('/subcategoria', SubcategoriaController.destroy);

//Rotas para Ação
routes.post('/acao', AcaoController.store);

module.exports = routes;