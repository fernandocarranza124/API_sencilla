const express = require('express');
const app = express();

app.get('/', (req,res) =>{
    res.send('Esta es una prueba sencilla')
});


module.exports = app;