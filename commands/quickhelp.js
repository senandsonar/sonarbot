const Discord = require('discord.js');

module.exports = {
	name: 'quickhelp',
	description: 'help!',
	execute(message, args) {
		

// inside a command, event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('**Here is a list of the commands and what they do and how to use them.**')
    .setAuthor('Sen#1143', 'https://i.imgur.com/ilVV4ya.jpg')
    .setURL('https://docs.google.com/document/d/1pphwd2FcdDeyrwsYI0xzMF85tey23E0iSdOBOUezf2w/edit')
	.setTimestamp()

	message.channel.send(exampleEmbed)
}}