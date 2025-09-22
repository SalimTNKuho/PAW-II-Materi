const express = require('express');
const app = express();
const PORT = 3000; // ← ini opsional

// Layani file statis dari folder 'public'
app.use(express.static('public'));

// (Opsional) Route tambahan    
app.get('/about', (req, res) => {
    res.send('<h1>Tentang Kami</h1><p>Halaman tambahan dengan HTML langsung.</p>');
});

// Jalankan server pada port 3000
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});