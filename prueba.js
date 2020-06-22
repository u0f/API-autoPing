const pinger = require("./lib/automaticping")

setInterval( function() {

console.log(pinger.start())

}, 10000)
