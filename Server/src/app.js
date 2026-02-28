// src/app.js
const express = require('express');
const morgan = require('morgan');
const app = express();

// Middleware
app.use(morgan('dev'));       // Para ver las peticiones en consola
app.use(express.json());      // Para leer req.body

// Puerto
app.set('port', process.env.PORT || 3000);

// Rutas
app.use('/api/employees', require('./routes/employees.routes'));

// Ruta raíz opcional
app.get('/', (req, res) => {
    res.send('Servidor corriendo 🚀');
});

module.exports = app;