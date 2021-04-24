const mongoose = require('mongoose');
const signUpTemplate=new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required:true
    },
    // role:{
    //     type: String,
    //     default: "helper"
    // },
    password:{
        type: String,
        required:true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports= mongoose.model("signupdb",signUpTemplate)  //error fixing