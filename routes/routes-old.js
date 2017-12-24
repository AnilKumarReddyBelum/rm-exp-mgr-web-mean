
var Expense = require('./models/expense');
var User = require('./models/User');



module.exports = function (app) {


    app.get('/user', function (req, res) {
        console.log('request -> /user');
        res.sendFile(__dirname + '/public3/user.html');
    });

    app.post('/addname', function (req, res) {
        var myData = new User(req.body);
        var saveFlag = false;
        myData.save().then(item => {
            saveFlag = true;
            User.find({}, function (err, data) {
                if (err) {
                    res.send("error");
                    return;
                }
                res.send(data);
            });

        }).catch(err => {
            res.status(404).send('unable to save into db' + err);
        });





    });


};