const Discord = require('discord.js');

module.exports = {
	name: 'invite',
	description: 'help!',
	execute(message, args) {
		

// inside a command, event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
    .setTitle('Click this link to invite me to your server!')
    .setURL('https://discord.com/api/oauth2/authorize?client_id=713353758913986562&permissions=2085219575&scope=bot')
	.setAuthor('Sen#1143', 'https://i.imgur.com/ilVV4ya.jpg')
	
	.setTimestamp()

    message.channel.send(exampleEmbed)
    }}