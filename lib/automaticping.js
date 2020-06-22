/* 

By: Ic𝖾#0069
Description: Program to ping glitch web to host 24/7 bots
all this package is protected by Copyright © & ISC license 

*/

function start() {

    /*  Find module  */
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

    /*  Declare the package method  */
    var Http = new XMLHttpRequest();
    
    /*  declare glitch url  */
    var url = `http://${process.env.PROJECT_DOMAIN}.glitch.me/`
    
    /*  Error if url is undefined or error  */
    if(!url) throw Error("Error find: url not find");
    
    /*  Open url & send ping  */
    Http.open("GET", url);
    Http.send();

    /*  Ping activity   */ 
    Http.onreadystatechange = (e) => {
        
        /*  If those http error exec  */
        if([400, 406, 401, 429, 500].includes(Http.status)) throw Error("Error find: " + x) 

    };
   
};


module.exports = {
    start
}