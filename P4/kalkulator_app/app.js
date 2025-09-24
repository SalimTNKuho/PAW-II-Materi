const express = require('express');
const app = express();
const port = 3000;

// Data produk di array
const products = [
    { name: 'Air Mineral', qty: 1, price: 10000 },
    { name: 'Susu', qty: 1, price: 15000 },
    { name: 'Roti', qty: 1, price: 20000 },
    { name: 'Telur', qty: 1, price: 30000 },
];

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/minimarket', (req, res) => {
   res.render('minimarket', { products }); 
});

app.listen(port, () => {
    console.log(`Aplikasi berjalan di http://localhost:${port}/minimarket`);
});