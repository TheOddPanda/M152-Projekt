exports.log = function (LOG_LEVEL, CLAZZ, logMessage) {
    switch (LOG_LEVEL) {
        case "SEVERE":
            console.error("[" + LOG_LEVEL + "][" + CLAZZ + "]" + "[" + logMessage + "]");
            break;
        case "WARNING":
            console.warn("[" + LOG_LEVEL + "][" + CLAZZ + "]" + "[" + logMessage + "]");
            break;
        case "INFO":
            console.log("[" + LOG_LEVEL + "][" + CLAZZ + "]" + "[ " + logMessage + " ]");
            break;
        default:
            console.log("[" + LOG_LEVEL + "][" + CLAZZ + "]" + "[ " + logMessage + " ]");
    }
};

exports.renderWebPage = function (response, html, data) {
    if (data) {
        response.render(html, data);
    } else {
        response.render(html);
    }
};