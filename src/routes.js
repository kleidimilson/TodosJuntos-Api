const { Router } = require('express');



const MercadoController = require('./controllers/MercadoController');
const CursoController = require('./controllers/CursoController');
const FarmaciaController = require('./controllers/FarmaciaController');
const HospitalController = require('./controllers/HospitalController');
const BebidaController = require('./controllers/BebidaController');
const ServicoController = require('./controllers/ServicosController');
const ArtesanatoController = require('./controllers/ArtesanatoController');
const LancheController = require('./controllers/LanchesController');
const LojasController = require('./controllers/LojaController');


const routes = Router();

routes.get('/', (req, res) => {
    res.send('Api que cadastra e retorna um guia comercial de Campo Maior')
})



routes.get('/mercados', MercadoController.index);
routes.post('/mercados', MercadoController.store);
routes.delete('/mercados', MercadoController.delete);



routes.get('/cursos', CursoController.index);
routes.post('/cursos', CursoController.store);
routes.delete('/cursos', CursoController.delete);


routes.get('/farmacias', FarmaciaController.index);
routes.post('/farmacias', FarmaciaController.store);
routes.delete('/farmacias', FarmaciaController.delete);


routes.get('/hospitais', HospitalController.index);
routes.post('/hospitais', HospitalController.store);
routes.delete('/hospitais', HospitalController.delete);


routes.get('/bebidas', BebidaController.index);
routes.post('/bebidas', BebidaController.store);
routes.delete('/bebidas', BebidaController.delete);

routes.get('/servicos', ServicoController.index);
routes.post('/servicos', ServicoController.store);
routes.delete('/servicos', ServicoController.delete);

routes.get('/artesanatos', ArtesanatoController.index);
routes.post('/artesanatos', ArtesanatoController.store);
routes.delete('/artesanatos', ArtesanatoController.delete);

routes.get('/lojas', LojasController.index);
routes.post('/lojas', LojasController.store);
routes.delete('/lojas', LojasController.delete);

routes.get('/lanches', LancheController.index);
routes.post('/lanches', LancheController.store);
routes.delete('/lanches', LancheController.delete);

module.exports = routes;