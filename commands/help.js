// at the top of your file
const Discord = require('discord.js');

module.exports = {
	name: 'help',
	description: 'help!',
	execute(message, args) {
		

// inside a command, event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('**Do ",setup" to use Sonar to her max potential!**')
	.setAuthor('Sen#1143', 'https://i.imgur.com/ilVV4ya.jpg')
	.setThumbnail (`https://i.imgur.com/h1ekMX8.png`)
	.setDescription('Prefix: ,')
	.addFields(
		{ name: '**Moderation**', value: 'ban | unban | mute | unmute | purge | jail | unjail | slowmode' },
		{ name: '**Miscellaneous**', value: 'status | weather | spotify | number | report | corona/covid | roleinfo | poll | 8ball | av | ping | help | setup | invite | emoji | define | giveaway | background | quickhelp', inline: true },
		{ name: '**Extras**', value: '***Sonar was made by Sen#1143. Additional commands will be added to this bot over time and the help command will be updated to include anything new.***'},
	)
	.setTimestamp()

	message.channel.send(exampleEmbed)
}}