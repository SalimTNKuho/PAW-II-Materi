const express = require('express');
const app = express();
const port = 3000;

// Data produk di array
const products = [
    { name: 'Air Mineral', qty: 1, price: 10000 },
    { name: 'Susu', qty: 1, price: 15000 },
    { name: 'Roti', qty: 2, price: 20000 },
    { name: 'Telur', qty: 3, price: 30000 },
];

// Set EJS sebagai view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Route untuk halaman minimarket
app.get('/minimarket', (req, res) => {
   res.render('minimarket', { products }); 
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Aplikasi berjalan di http://localhost:${port}/minimarket`);
});