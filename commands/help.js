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
	.setAuthor('Sonar:')
	.setThumbnail (`https://i.imgur.com/h1ekMX8.png`)
	.setDescription('Prefix: ,')
	.addFields(
		{ name: '**Moderation**', value: 'ban | unban | mute | unmute | purge | jail | unjail | slowmode' },
		{ name: '**Miscellaneous**', value: 'status | weather | corona | roleinfo | poll | 8ball | av | ping | help | setup | invite', inline: true },
	)
	.setTimestamp()

	message.channel.send(exampleEmbed)
}}