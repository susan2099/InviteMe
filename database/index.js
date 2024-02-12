
const { DB_IP } = require('../config.js');
const mongoose = require('mongoose');



mongoose.set('strictQuery', true);
mongoose.connect(DB_IP)
    .then(() => {
        console.log('mongoose connected')
    })
    .catch((err) => {
        console.log(err);
    })

module.exports = {mongoose};
 


