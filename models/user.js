const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
   email: { type: String, required: true }, 
   password: { type: String, required: true }
});

// Method to compare passwords
userSchema.methods.validPassword = function(password) {
   return password === this.password;
 };

module.exports = mongoose.model('User', userSchema);
