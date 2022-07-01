const Discord = require("discord.js");
const db = require("quick.db");
const client = new Discord.Client();
const fs = require("fs");
const { Client, MessageEmbed } = require('discord.js');
const ms = require("ms");
const prefix = require('./prefix.json')


require('./util/Loader.js')(client);
require('./commands/market.js')(client);
require('./util/seskanal.js')(client);

client.on('ready', async () => {
  console.log(`${client.user.tag} nick ile hazır!`);
})

client.on('message', msg => {
  if(msg.content.toLowerCase() === '!davet') {
    msg.channel.send('*Destek sunucumuz https://discord.gg/jVsMY8HUXb*');
  }
})
 
console.log('sahip aktif')
module.exports = { 
    kod: "!sahip",
    async run (client, message, args, prefix) { 
        if (message.author.id !== "331301033445687297") { 
        message.channel.send("Sen bot sahibi değilsin.")
    } else { 
      message.channel.send("Sen benim sahibimsin.")
    }
  }
}


client.login("OTg5ODU0OTc4Nzc0NTMyMTU2.GYwRJQ.Q7XGOm-GYBAbVbdYh7_G3wROA2k9YFy9PCQFeM");