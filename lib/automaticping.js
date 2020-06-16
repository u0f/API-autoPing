
function start() {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var Http = new XMLHttpRequest();
    const url= process.env.URL;
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
    if([400, 406, 401, 429, 500].includes(Http.status)) throw Error("Error find: " + x) 
    }
   
};

module.exports = {
    start
}