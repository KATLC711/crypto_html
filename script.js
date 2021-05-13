var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({ defaultLayout: 'main' });
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 6453);


var cred_info = []
var cheungke = {
    'username': 'cheungke',
    'password': 'abc1234',
    'holdings': ['VET', 'ETH'],
    'amount': [5, 10]
}
var nokkiu = {
    'username': 'nokkiu',
    'password': '123456',
    'holdings': ['BIT', 'ETH'],
    'amount': [100, 10]
}

cred_info.push(cheungke)
cred_info.push(nokkiu)



app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname, '../public', 'index1.html'));
});



app.use(function (req, res) {
    res.status(404);
    res.render('404');
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.type('plain/text');
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
