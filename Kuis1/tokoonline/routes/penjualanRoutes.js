const express = require('express');
const router = express.Router();
const penjualanController = require('../controllers/penjualanController');

// Rute untuk menambahkan produk ke penjualan
router.post('/add', penjualanController.addToPenjualan);

// Rute untuk melihat daftar penjualan
router.get('/', penjualanController.getPenjualan);

module.exports = router;