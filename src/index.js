const express = require("express");
const cors = require('cors');


const routes = require('./routes');
const conectarMongo = require('./utils/mongo');
const app = express();

conectarMongo();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3500);
