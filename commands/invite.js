const Discord = require('discord.js');

module.exports = {
	name: 'invite',
	description: 'help!',
	execute(message, args) {
		

// inside a command, event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('BLUE')
    .setTitle('Click this link to invite me to your server!')
    .setURL('https://discord.com/api/oauth2/authorize?client_id=713353758913986562&permissions=8&scope=bot')
	.setAuthor('Sonar:')
	
	.setTimestamp()

    message.channel.send(exampleEmbed)
    }}