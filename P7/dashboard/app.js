const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware untuk membaca file statis
app.use(express.static(path.join(__dirname, 'views')));

// Routing ke halaman utama (dashboard)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
