const mongoose = require ('mongoose');

async function main () {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(process.env.MONGO_URI);
        console.log('LA BASE DE DATOS ESTA CONECTADA');
    } catch (error){
        console.error('error conectando con la base de datos', error);
    }
}

module.exports = main; 