const colors = require('colors');
const express = require('express');
const lenguajes = require('../src/lenguajes').infoLenguajes;

const app = express();
const PORT = 3000;

const Content_Type = 'Content-Type'
const type_json = 'application/json'
const type_html = 'text/html'

const HOME = fs.readFileSync('./vista/home.html', 'utf-8');
const ABOUT = fs.readFileSync('./vista/about.html', 'utf-8');

function imprimirMensaje(msj) {
    console.log(msj.green)
}
imprimirMensaje("Hola")

app.get('/api/lenguajes', (req, res) => {
    console.log(typeof lenguajes);
    res.setHeader('Content-Type', 'application/json')
    res.status(200);
    res.send(JSON.stringify(lenguajes.frontend))
})
app.get('/api/lenguajes/backend', (req, res) => {
    console.log(typeof lenguajes);
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    res.send(JSON.stringify(lenguajes.backend));
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`.blue);
})