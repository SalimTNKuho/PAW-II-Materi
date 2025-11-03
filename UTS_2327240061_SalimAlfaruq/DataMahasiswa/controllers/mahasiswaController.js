const express = require('express');
const mahasiswa = require('../models/mahasiswaModel');

class mahasiswaController {
  static getAll(req, res) {
    res.json(mahasiswa);
  }

  static getById(req, res) {
    const id = req.params.id;
    const data = mahasiswa.find(item => item.id === id);
    if (data) {
      res.json(data);
    } else {
      res.status(404).json({ message: 'Data tidak ditemukan' });
    }
  }

  static create(req, res) {
    const { npm, nama, jurusan, kode_jenis_kelamin, tgl_lahir } = req.body;
    if (!npm || !nama || !jurusan || !kode_jenis_kelamin || !tgl_lahir) {
      return res.status(400).json({ message: 'Semua data harus diisi' });
    }

    const sudahAda = mahasiswa.find(item => item.id === id);
    if (sudahAda) {
      return res.status(409).json({ message: 'ID sudah digunakan' });
    }

    const dataBaru = { id: (mahasiswa.length + 1).toString(), npm, nama, jurusan, kode_jenis_kelamin, tgl_lahir };
    mahasiswa.push(dataBaru);
    res.status(201).json(dataBaru);
  }

  static update(req, res) {
    const id = req.params.id;
    const index = mahasiswa.findIndex(item => item.id === id);

    if (index === -1) {
      return res.status(404).json({ message: 'Data tidak ditemukan' });
    }

    const { npm, nama, jurusan, kode_jenis_kelamin, tgl_lahir } = req.body;

    if (npm) mahasiswa[index].npm = npm;
    if (nama) mahasiswa[index].nama = nama;
    if (jurusan) mahasiswa[index].jurusan = jurusan;
    if (kode_jenis_kelamin) mahasiswa[index].kode_jenis_kelamin = kode_jenis_kelamin;
    if (tgl_lahir) mahasiswa[index].tgl_lahir = tgl_lahir;

    res.json(mahasiswa[index]);
  }

  static delete(req, res) {
    const id = req.params.id;
    const index = mahasiswa.findIndex(item => item.id === id);

    if (index === -1) {
      return res.status(404).json({ message: 'Data tidak ditemukan' });
    }

    const deleted = mahasiswa.splice(index, 1);
    res.json({ message: 'Data berhasil dihapus', data: deleted[0] });
  }
}

module.exports = mahasiswaController;