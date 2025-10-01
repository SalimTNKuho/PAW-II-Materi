const express = require('express');
const path=require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// array utk menampung data input
let products=[];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Halaman daftar produk
app.get("/minimarket", (req, res) => {
    res.render('minimarket', { products });
});

// Halaman form input produk
app.get("/add", (req, res) => {
    res.render('form');
});

// terima data dari form
app.post("/add", (req, res) => {
    const{name, qty, price} = req.body;
    products.push({
        name, 
        qty:parseInt(qty), 
        price:parseInt(price)
    });
    res.redirect('/minimarket');
    // res.redirect('/minimarket');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// jalankan server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;