// src/index.js
const app = require('./app');

const PORT = app.get('port');
require('./database');
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});