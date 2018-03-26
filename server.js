const PORT = 10000;

///////////////////
///NPM-MODULES/////
///////////////////
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

///////////////////
//CUSTOM MODULES///
///////////////////
var serverHelperUtil = require('./src/util/serverutil.js');

///////////////////
//EXPRESS-CONFIG///
///////////////////
app.set('views', __dirname + '/view');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use('/static', express.static(__dirname + '/static'));
app.use(bodyParser.json());

/////////////////
////REQUESTS/////
/////////////////
app.get('/', function (request, response) {
    serverHelperUtil.renderWebPage(response, 'index.html', null);
});

app.get('/copyright', function (request, response) {
    serverHelperUtil.renderWebPage(response, 'index.html', null);
});

app.get('/learnjournal', function (request, response) {
    serverHelperUtil.renderWebPage(response, 'index.html', null);
});

app.get('/libraries', function (request, response) {
    serverHelperUtil.renderWebPage(response, 'index.html', null);
});

/////////////////
//////MAIN///////
/////////////////
app.listen(PORT);
console.log("Server started on " + PORT);