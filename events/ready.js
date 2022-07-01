const Discord = require("discord.js");
module.exports = async client => {
  client.user.setPresence({ activity: { type: "LISTENING", name: `Kayrayla şarkı`}, status: 'ONLİNE' })
  console.log('Durum aktif!')
};

// WATCHING - İZLİYOR
// PLAYING - OYNUYOR
// LISTENING - DİNLİYOR

// ONLİNE - çevrim içi
// IDLE - boşta
// DND - rahatsız etmeyin