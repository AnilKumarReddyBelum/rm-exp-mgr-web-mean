var mongoose = require('../config/db');

var expenseSchema = new mongoose.Schema({
    owner: { type: String, default: undefined },
    cost: { type: Number, default: undefined },
    time: { type: Date, default: new Date() }
});

module.exports = mongoose.model('Expense', expenseSchema);
