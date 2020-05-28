// at the top of your file
const Discord = require('discord.js');

module.exports = {
	name: 'help',
	description: 'help!',
	execute(message, args) {
		

// inside a command, event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#f83333')
	.setTitle('**Do ",setup" to use Sonar to her max potential!**')
	.setAuthor('**Sonar:**')
	.setDescription('Prefix: ,')
	.addFields(
		{ name: '**Moderation**', value: 'ban | unban | mute | unmute | purge | jail | unjail ' },
		{ name: '**Miscellaneous**', value: 'status | weather | corona | roleinfo | poll | 8ball | av | ping | help | setup', inline: true },
		{ name: '\u200B', value: '\u200B' },
	)
	.setTimestamp()

	message.channel.send(exampleEmbed)
}}