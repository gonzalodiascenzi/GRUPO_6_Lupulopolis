const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/productDetail', (req, res) => {
    res.sendFile(__dirname + '/views/productDetail.html');
});

app.get('/productCart', (req, res) => {
    res.sendFile(__dirname + '/views/productCart.html');
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html');
});


app.listen(PORT, () => {
    console.log("El servidor de monto en el puerto " + PORT);
});