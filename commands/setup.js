const Discord = require('discord.js');

module.exports = {
	name: 'setup',
	description: 'help!',
	execute(message, args) {
		

// inside a command, event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#f83333')
	.setTitle('To use Sonar effectively, follow these instructions...')
	.setAuthor('Sonar:')
	.setDescription('You will need to create a few roles and a channel.')
	.addFields(
		{ name: '**Mute Role**', value: 'Create a role called "Muted" that has the permission to talk disabled in all channels.  ' },
		{ name: '**Jailed Role and Jail Channel.**', value: 'Create a role called "Jailed" and a text channel called "Jail". Remove all the permissions from the Jailed role and then only allow members with the Jailed role to send messages in Jail.', inline: true },
		{ name: '**Report Channel**', value: 'Create a channels called "reports". This channel is where your user reports will appear for moderators to see. ' },
	)
	.setTimestamp()

	message.channel.send(exampleEmbed)
}}