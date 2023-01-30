const { Schema, model } = require('mongoose');

const userschema = new Schema({
username: {
    type: String,
    required: true
},
password: {
    type: String,
    required: true
},
email: String,
name: String,
deleted_at: {
    type:Date,
    default:null
}
})

module.exports= model('users' , userschema);
