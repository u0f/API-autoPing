
__¿For what is that?__
This pack has been created to keep glitch projects always on, without any payment.
The URL is automatically find ¡Only functional in glitch proyects!

[Donations](https://paypal.me/pools/c/8q2SDz4bNr)
Discord: Ic𝖾#0069
| Avalible functions | Explications |
| ------ | ------ |
| start | The package attempt to call the url |


### Instalation: 
```sh
npm install glitch-automaticping
```

### Usage:
```js
//Package
const automaticping = require("glitch-automaticping");
const Discord = require("discord.js")
const client = Discord.Client()

client.on("ready", () => {
 console.log("Bot ready")

 //call interval
setInterval( function() {
 automaticping.start()
}, 10000)
//This time you can change it, but 10000 work correctly
});


```