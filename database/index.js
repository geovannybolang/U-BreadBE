const mongoose = require('mongoose');
const { mongoUrl } = require('../config');

mongoose.connect(mongoUrl)
    .then(res => console.log(`Berhasil terhubung di database.`))
    .catch(error => console.log(`Gagal terhubung di database. (${error.message})`));
