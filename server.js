const PORT = 10000;
const docDir = "doc/";
const imageDir = "/static/images";

///////////////////
///NPM-MODULES/////
///////////////////
let express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

///////////////////
//CUSTOM MODULES///
///////////////////
let serverHelperUtil = require('./src/util/serverutil.js');
let mdConverterUtil = require('./src/util/FileUtil.js');
///////////////////
//EXPRESS-CONFIG///
///////////////////
app.set('views', __dirname + '/view');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use('/static', express.static(__dirname + '/static'));
app.use(bodyParser.json({limit: "500mb"}));

/////////////////
////REQUESTS/////
/////////////////
app.post('/uploadImage', function (request, response) {
    let imgBase64 = request.body.imgBase64;
    console.log(imgBase64);
    response.end();
});

app.get('/', function (request, response) {
    serverHelperUtil.renderWebPage(response, 'index.html', null);
});

app.get('/gallery', function (request, response) {
    serverHelperUtil.renderWebPage(response, 'imagegallery.html', null);
});

app.get('/competence1_1', function (request, response) {
    let data = {};

    //append png information to html
    let pngPath = docDir + "/competence_1_1/png_doc.md";

    data.png = mdConverterUtil.convertMDFileToHtml(pngPath);
    //append jpg information to html
    let jpgPath = docDir + "/competence_1_1/jpg_doc.md";
    data.jpg = mdConverterUtil.convertMDFileToHtml(jpgPath);
    //append gif information to html
    let gifPath = docDir + "/competence_1_1/gif_doc.md";
    data.gif = mdConverterUtil.convertMDFileToHtml(gifPath);

    serverHelperUtil.renderWebPage(response, 'competence1_1.html', data);
});

app.get('/learnjournal', function (request, response) {
    let data = {};
    let learnJournalPath = docDir + "/learnjournal_20180319.md";
    data.learnjournal = mdConverterUtil.convertMDFileToHtml(learnJournalPath);

    serverHelperUtil.renderWebPage(response, 'learnjournal.html', data);
});

app.get('/libraries', function (request, response) {
    serverHelperUtil.renderWebPage(response, 'index.html', null);
});

/////////////////
//////MAIN///////
/////////////////
app.listen(PORT);
console.log("Server started on " + PORT);