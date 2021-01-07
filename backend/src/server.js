const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://resenha:dentinho@cluster0.zevfg.mongodb.net/semana?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//GET: Busca informação 
//POST: criar informação 
//PUT: alterar informação
//DELETE: deleta informação 

app.use(express.json());
app.use(routes);

app.listen(3333);