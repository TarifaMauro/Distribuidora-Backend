const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Conexion a la base de datos
const prisma = require('./config/db');


const app = express();
//Puerto del servidor
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());//Permite que el servidor sea accedido desde cualquier origen
app.use(express.json());//Permite que el servidor reciba peticiones en formato JSON
app.use(express.urlencoded({ extended: true }));//Permite que el servidor reciba peticiones en formato URL-encoded



app.get('/', async (req, res) => {
    try {
        const result = await prisma.$queryRaw`SELECT NOW()`;
        res.json({
            status: 'OK',
            message: 'Conexion exitosa a la base de datos',
            databaseTime: result[0].now
        });
    } catch (err) {
        console.error('Error al conectar a la base de datos:', err.stack);
        res.status(500).json({ error: 'Error al conectar a la base de datos' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
