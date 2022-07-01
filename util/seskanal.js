const Discord = require("discord.js");
const reqEvent = event => require(`../events/${event}`);
module.exports = client => {
  client.on('seskanal', () => reqEvent('seskanal')(client));

  console.log('Seste durma aktif!')

client.on("ready", () => {
    client.channels.cache.get("992000197527883849").join();
  })
}