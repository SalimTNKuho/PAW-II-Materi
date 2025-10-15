import moongose from 'mongoose';

const mahasiswaSchema = new moongose.Schema({
    fullname : {
        type: String
    },
    npm : {
        type: String,
        unique: true,
        required: true,
        maxLength: 10,
    },
    password : {
        type: String,
        required: true,
    }
})

export default moongose.model('Mahasiswa', mahasiswaSchema);