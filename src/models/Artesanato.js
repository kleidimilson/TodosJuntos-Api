const mongoose = require('mongoose');


const ArtesanatoSchema = new mongoose.Schema({
    nome: String,
    cidade: String,
    contato: String,
    link: String,
    endereço: String,
    informações: String
});

module.exports = mongoose.model('Artesanato', ArtesanatoSchema);

