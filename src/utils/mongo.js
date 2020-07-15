const mongoose = require('mongoose');

function conectar () {
    //mongodb+srv://misso:2000jose@cluster0-duzvd.mongodb.net/TodosJuntos?retryWrites=true&w=majority
    mongoose.connect('mongodb+srv://misso:2000jose@todosjuntoscluster.fmxmd.gcp.mongodb.net/TodosJuntos?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
    }); 
}


module.exports = conectar;