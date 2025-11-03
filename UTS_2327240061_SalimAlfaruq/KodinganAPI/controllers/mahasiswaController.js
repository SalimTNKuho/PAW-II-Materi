import Mahasiswa from '../models/mahasiswaModel.js'
import bcrypt from 'bcryptjs'

const createMahasiswa = async (req, res) => {
    try{
        const {npm, nama, jurusan, kode_jenis_kelamin, tgl_lahir} = req.body;

        const existsMahasiswa = await Mahasiswa.findOne({npm});
        if (existsMahasiswa) return res.status(400).json({
            message: "NPM already registered"
        })

        const hashPassword = await bcrypt.hash(password, 10);
        const newMahasiswa = await Mahasiswa.create({
            npm: npm,
            nama: nama,
            jurusan: jurusan,
            kode_jenis_kelamin: kode_jenis_kelamin,
            tgl_lahir: tgl_lahir,
        });

        res.status(201).json({
            message: "Mahasiswa created successfully",
            data: newMahasiswa
        });
    } catch (err){
        console.error(err);
        res.status(500).json({
            message : err.message
        })
    }
}

export {createMahasiswa};