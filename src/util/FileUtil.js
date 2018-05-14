let markdown = require("markdown").markdown,
    fs = require('fs');

exports.convertMDFileToHtml = function (path) {
    let file = fs.readFileSync(path);
    let stringifiedDoc = file.toString();
    return markdown.toHTML(stringifiedDoc);
};