const express = require('express');
// const path=require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let products=[];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Halaman daftar produk
app.get('/minimarket', (req, res) => {
    res.render('dashboard', { products });
});

app.get('/add', (req, res) => {
    res.render('form');
});

// Form input produk
app.post('/add', (req, res) => {
    const{name, qty, price} = req.body;
    products.push({
        name, 
        qty:parseInt(qty), 
        price:parseInt(price)
    });
    app.redirect('/minimarket');
    // res.redirect('/minimarket');
});