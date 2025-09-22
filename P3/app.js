const express = require('express');
const app = express();
const PORT = 3000;

app.get('/about', (req, res) => {
    res.send('Halo Selamat Datang di Express JS');
});

app.listen(PORT, () => {
    console.log(`Server berjalan pada http://localhost:${PORT}`);
});