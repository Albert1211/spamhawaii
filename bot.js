const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("671083409652580394")
setInterval(function() {
channel.send(`credit credit credit credit credit credit credit credit credit credit credit`);
}, 30)
})

client.login(process.env.BOT_TOKEN);