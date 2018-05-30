const PORT = 10000;
const docDir = "doc/";
const imageDir = "static/images";
const learnDir = docDir + "/learnjournal/";

///////////////////
///NPM-MODULES/////
///////////////////
let express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    ExifImage = require('exif').ExifImage;

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

app.get('/', function (request, response) {
    serverHelperUtil.renderWebPage(response, 'index.html', null);
});


/////////////////
//Competence 1.1///
/////////////////
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

/////////////////
//Competence 1.2/
/////////////////
app.get('/competence1_2', function (request, response) {
    serverHelperUtil.renderWebPage(response, 'competence1_2.html', null);
});

/////////////////
//Competence 1.3/
/////////////////
app.get('/competence1_3', function (request, response) {
    let data = {};
    let calculateDownload = docDir + "/competence_1_3/calculateDownload.md";
    data.calculateDownload = mdConverterUtil.convertMDFileToHtml(calculateDownload);

    serverHelperUtil.renderWebPage(response, 'competence1_3.html', data);
});

/////////////////
//Competence 1.4/
/////////////////
app.get('/competence1_4', function (request, response) {
    let data = {};
    let watermark = docDir + "/competence_1_4/watermark.md";
    data.watermark = mdConverterUtil.convertMDFileToHtml(watermark);
    serverHelperUtil.renderWebPage(response, 'competence1_4.html', data);
});

/////////////////
//Competence 1.5/
/////////////////
app.get('/competence1_5', function (request, response) {
    serverHelperUtil.renderWebPage(response, 'competence1_5.html', null);
});

/////////////////
//Competence 1.6/
/////////////////
app.get('/competence1_6', function (request, response) {
    let data = {};
    let displayImages = docDir + "/competence_1_6/displayImages.md";
    data.displayImages = mdConverterUtil.convertMDFileToHtml(displayImages);
    serverHelperUtil.renderWebPage(response, 'competence1_6.html', data);
});

/////////////////
//Competence 1.7/
/////////////////
app.get('/competence1_7', function (request, response) {
    serverHelperUtil.renderWebPage(response, 'competence1_7.html', null);
});

/////////////////
//Competence 1.8/
/////////////////
app.get('/competence1_8', function (request, response) {
    serverHelperUtil.renderWebPage(response, 'competence1_8.html', null);
});

/////////////////
//Competence 1.9/
/////////////////
app.get('/competence1_9', function (request, response) {
    let data = {};
    try {
        new ExifImage({image: imageDir + '/meta_daten.jpg'}, function (error, exifData) {
            if (error) {
                console.log('Error: ' + error.message);
            } else {
                data.exifData = JSON.stringify(exifData);
                serverHelperUtil.renderWebPage(response, 'competence1_9.html', data);
            }
        });
    } catch (error) {
        console.log('Error: ' + error.message);
        serverHelperUtil.renderWebPage(response, 'competence1_9.html', null);
    }
});


/////////////////
//Competence 2///
/////////////////

/////////////////
//Competence 4///
/////////////////

app.get('/competence4_3', function (request, response) {
    serverHelperUtil.renderWebPage(response, 'competence4_3.html', null);
});

app.get('/competence4_4', function (request, response) {
    serverHelperUtil.renderWebPage(response, 'competence4_4.html', null);
});
/////////////////
/////Others//////
/////////////////

app.get('/learnjournal', function (request, response) {
    let data = {};
    data.learnjournal_20180319 = mdConverterUtil.convertMDFileToHtml(learnDir + "learnjournal_20180319.md");
    data.learnjournal_20180326 = mdConverterUtil.convertMDFileToHtml(learnDir + "learnjournal_20180326.md");
    data.learnjournal_20180330 = mdConverterUtil.convertMDFileToHtml(learnDir + "learnjournal_20180330.md");
    data.lernjournal_20180409 = mdConverterUtil.convertMDFileToHtml(learnDir + "lernjournal_20180409.md");
    data.lernjournal_20180416 = mdConverterUtil.convertMDFileToHtml(learnDir + "lernjournal_20180416.md");
    data.lernjournal_20180423 = mdConverterUtil.convertMDFileToHtml(learnDir + "lernjournal_20180416.md");
    data.lernjournal_20180416 = mdConverterUtil.convertMDFileToHtml(learnDir + "lernjournal_20180416.md");
    data.lernjournal_20180423 = mdConverterUtil.convertMDFileToHtml(learnDir + "lernjournal_20180423.md");
    data.lernjournal_20180528 = mdConverterUtil.convertMDFileToHtml(learnDir + "lernjournal_20180528.md");
    data.lernjournal_20180530 = mdConverterUtil.convertMDFileToHtml(learnDir + "lernjournal_20180530.md");

    serverHelperUtil.renderWebPage(response, 'learnjournal.html', data);
});


app.get('/libraries', function (request, response) {
    serverHelperUtil.renderWebPage(response, 'libraries.html', null);
});

/////////////////
//////MAIN///////
/////////////////
app.listen(PORT);
console.log("Server started on " + PORT);