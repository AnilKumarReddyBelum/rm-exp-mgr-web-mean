var mongoose = require('../config/db');

var userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
});

module.exports = mongoose.model('User', userSchema);

