const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js");
module.exports = async client => {

	console.log('Market hazır!')

client.on('message', message => { 	
if (message.content.toLowerCase() === '!market') { 
	const kanal = new MessageEmbed()
	.setTitle('Araba marketine hoşgeldin.')
	.setColor('#0099ff')
	.setAuthor({ name: 'Kayra'})
	.setDescription('Araç marketi')
	.setThumbnail(message.author.avatarURL({dynamic: true}))
	.addField(':blue_car:' 	, 'A Segment: 25.000TL');
	message.channel.send(kanal);
}
 })
  }
