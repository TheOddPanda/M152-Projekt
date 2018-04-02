const PORT = 10000;
const docDir = "doc/";

///////////////////
///NPM-MODULES/////
///////////////////
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    markdown = require("markdown").markdown,
    fs = require('fs');

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

app.get('/gallery', function (request, response) {
    serverHelperUtil.renderWebPage(response, 'imagegallery.html', null);
});

app.get('/competence1_1', function (request, response) {
    var data = {};

    //append png to html
    var file = fs.readFileSync(docDir + "png_doc.md");
    var stringifiedDoc = file.toString();
    data.png = markdown.toHTML(stringifiedDoc);

    serverHelperUtil.renderWebPage(response, 'competence1_1.html', data);
});

app.get('/learnjournal', function (request, response) {
    serverHelperUtil.renderWebPage(response, 'learnjournal.html', null);
});

app.get('/libraries', function (request, response) {
    serverHelperUtil.renderWebPage(response, 'index.html', null);
});

/////////////////
//////MAIN///////
/////////////////
app.listen(PORT);
console.log("Server started on " + PORT);