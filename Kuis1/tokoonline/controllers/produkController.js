const produk = require('../models/produkModels');

// Menampilkan daftar produk
exports.getAllProduk = (req, res) => {
    res.status(200).json({
        message: 'Daftar Produk',
        data: produk,
    });
};

module.exports = produkController;