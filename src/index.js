const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const {setupWebsocket} = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://omnistack10:024681012@cluster1-o1uih.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);
/*
Tipos de parâmentros

1- Query params: req.query (Filtros, ordenação, paginação, ...)
2- Route Params: req.params (Identificar um recurso na alteração ou remoção)
3- Body: req.body (Dados para criação ou alteração de um registro)
*/

server.listen(3333);
