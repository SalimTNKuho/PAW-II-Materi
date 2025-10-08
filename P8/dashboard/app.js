const express = require('express');
const app = express();
const penjualanRoutes = require('./routes/penjualanRoutes');

app.use(express.json());
app.use('/penjualan', penjualanRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});


// app.use(bodyParser.json());
// app.use('/penjualan', penjualanRoutes);

// app.get('/', (req, res) => {
//   res.send('Selamat datang di aplikasi penjualan!');
// });

// app.listen(PORT, () => {
//   console.log(`Server berjalan di http://localhost:${PORT}`);
// });


// // untuk parsing application/json
// app.use(express.urlencoded({ extended: true }));

// // Middleware untuk membaca file statis
// app.use(express.static(path.join(__dirname, 'views')));

// let products = []; // Array untuk menyimpan data produk

// // Routing ke halaman utama (dashboard)
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'views', 'index.html'));
// });

// app.get('/tambah', (req, res) => {
//   res.sendFile(path.join(__dirname, 'views', 'tambah.html'));
// });

// app.get('/daftar', (req, res) => {
//   res.sendFile(path.join(__dirname, 'views', 'daftar.html'));
// });

// // Menangani data yang dikirim dari form tambah produk
// app.post('/tambah', (req, res) => {
//   const { nama, harga, stok } = req.body;
//   products.push({
//     id: products.length + 1,
//     nama, 
//     harga: parseInt(harga),
//     stok: parseInt(stok)
//   });
//   res.redirect('/daftar');
// });

// // Menjalankan server
// app.listen(PORT, () => {
//   console.log(`Server berjalan di http://localhost:${PORT}`);
// });
