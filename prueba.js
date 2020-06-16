const pinger = require("./lib/automaticping")

setInterval( function() {
    pinger.start()
},10000)
