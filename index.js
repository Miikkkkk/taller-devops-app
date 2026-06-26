const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({ url: 'redis://db:6379' });

client.on('error', (err) => console.log('Redis Client Error', err));

app.get('/', async (req, res) => {
    await client.connect();
    await client.set('visitas', '1');
    res.send('¡Hola! API conectada a un contenedor de datos de forma exitosa.');
    await client.disconnect();
});

app.listen(3000, () => {
    console.log('API escuchando en el puerto 3000');
});