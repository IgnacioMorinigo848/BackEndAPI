// Cargar módulos necesarios
const express = require('express');
const cookieParser = require('cookie-parser');
const bluebird = require('bluebird');
const cors = require('cors');
const mongoose = require('mongoose');

// Cargar variables de entorno
require('dotenv').config();

// Importar routers
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

// Instanciar el servidor
const app = express();

// Configurar middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());

// Configurar CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// Indicar las rutas de los endpoints
app.use('/api', apiRouter);
app.use('/', indexRouter);

// Conectar a la base de datos
mongoose.Promise = bluebird;
const url = process.env.DATABASE1;

const opts = {
  useNewUrlParser: true,
  connectTimeoutMS: 20000,
  useUnifiedTopology: true
};

mongoose.connect(url, opts)
  .then(() => {
    console.log(`Succesfully Connected to the MongoDB Database...`);
  })
  .catch((e) => {
    console.error(`Error Connecting to the MongoDB Database...`);
    console.error(e);
  });

// Configurar el puerto del servidor
const port = process.env.PORT || 8080;

// Escuchar en el puerto configurado
app.listen(port, () => {
  console.log('Servidor de ABM Users iniciado en el puerto', port);
});

module.exports = app;
