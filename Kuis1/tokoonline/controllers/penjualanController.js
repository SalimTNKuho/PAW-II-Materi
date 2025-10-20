const produk = require('../models/produkModels');

let penjualan = []; // Array untuk menyimpan data penjualan

// Menambahkan produk ke penjualan
exports.addToPenjualan = (req, res) => {
    const { kode, jumlah } = req.body;

    // Cari produk berdasarkan kode
    const itemProduk = produk.find((p) => p.kode === kode);

    if (!itemProduk) {
        return res.status(404).json({ message: 'Produk tidak ditemukan!' });
    }

    // Hitung total harga
    const totalHarga = itemProduk.harga * jumlah;

    // Tambahkan ke penjualan
    penjualan.push({
        kode: itemProduk.kode,
        nama: itemProduk.nama,
        harga: itemProduk.harga,
        jumlah,
        totalHarga,
    });

    res.status(201).json({
        message: 'Produk berhasil ditambahkan ke penjualan!',
        penjualan,
    });
};

// Menampilkan daftar penjualan
exports.getPenjualan = (req, res) => {
    const totalKeseluruhan = penjualan.reduce((acc, item) => acc + item.totalHarga, 0);

    res.status(200).json({
        message: 'Daftar Penjualan',
        data: penjualan,
        totalKeseluruhan,
    });
};

module.exports = PenjualanController;