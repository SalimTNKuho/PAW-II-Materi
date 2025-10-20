const express = require('express');
const router = express.Router();
const produkController = require('../controllers/produkController');

// Rute untuk mendapatkan semua produk
router.get('/', produkController.getAllProduk);

module.exports = router;