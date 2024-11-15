const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Conexión a la base de datos
const connection = mysql.createConnection({
    host: 'vps-1743404-x.dattaweb.com',
    port: '2095',
    user: 'baggio',
    password: 'eVSQS6MhjphBDdhl',
    database: 'baggio'
});

connection.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err.stack);
        return;
    }
    console.log('Conectado a la base de datos');
});

// Ruta API para obtener los pedidos
app.get('/api/pedidos', (req, res) => {
    connection.query('SELECT * FROM pedidos', (error, results) => {
        if (error) {
            console.error('Error en la consulta:', error.stack);
            res.status(500).send('Error en la consulta');
            return;
        }
        res.json(results);
    });
});

// Servir el archivo HTML en la carpeta 'public'
app.use(express.static('public'));

// Iniciar el servidor
app.listen(port, () => {
console.log('Servidorcorriendoenhttp://localhost:${port}');
});