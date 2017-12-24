
var Expense = require('../models/expense');

module.exports = function (app) {

    app.get('/', function (req, res) {
        console.log('request[Home Page] -> /');
        res.sendFile(__dirname + '/public2/index.html');
    });

    app.get('/getExpenseRecords', function (req, res) {
        console.log('request[Overview Page]--> /getExpenseRecords');
        Expense.find({}, function (err, data) {
            if (err) {
                res.send("error");
                return;
            }
            res.send(data);
        });
    });

    app.post('/createExpense',function(req,res){
        console.log('request[Overview Page]--> /createExpense');
        var expenseRecordFromUI = new Expense(req.body);
        expenseRecordFromUI.save();
        res.send('Expense Created Successfully!');
    });


};