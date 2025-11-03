import moongose from 'mongoose';

const mahasiswaSchema = new moongose.Schema({
    nama: {
        type: String,
    },
    npm: {
        type: String,
        unique: true,
        required: true,
        maxLength: 10,
    },
    jurusan: {
        type: String,
        required: true,
        maxLength: 10,
    },
    kode_jenis_kelamin: {
        type: String,
        required: true
    },
    tgl_lahir: {
        type: Date,
        required: true
    },
})

export default moongose.model('Mahasiswa', mahasiswaSchema);