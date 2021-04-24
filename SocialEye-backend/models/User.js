const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let userSchema = new Schema({
   fullName:{
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true
   },
   password: {
      type: String,
      required: true
   },
   date: {
       type: Date,
       default: Date.now

   }

})
module.exports = mongoose.model('User', userSchema);