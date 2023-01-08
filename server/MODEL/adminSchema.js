const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    adminEmail : {
        type:String,
        required:true,
    },
    password : {
        type:String,
        required:true
    }
});

module.exports = mongoose.model('admins',userSchema); 