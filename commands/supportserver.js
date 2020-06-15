const Discord = require('discord.js');

module.exports = {
	name: 'supportserver',
	description: 'help!',
	execute(message, args) {
		

// inside a command, event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
    .setTitle('Click this link to join the Sonar support server!')
    .setURL('https://discord.com/invite/XT8uM7')
	.setAuthor('Sen#1143', 'https://i.imgur.com/ilVV4ya.jpg')
	
	.setTimestamp()

    message.channel.send(exampleEmbed)
    }}