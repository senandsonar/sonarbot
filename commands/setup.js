const Discord = require('discord.js');

module.exports = {
	name: 'setup',
	description: 'help!',
	execute(message, args) {
		
		let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
		let color = message.member.displayHexColor;
        if (color == '#000000') color = message.member.hoistRole.hexColor;
// inside a command, event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor(color)
	.setTitle('To use Sonar effectively, follow these instructions...')
	.setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
	.setDescription('You will need to create a few roles and a channel.')
	.addFields(
		{ name: '**Jailed Role and Jail Channel.**', value: 'Create a role called "Jailed" and a text channel called "Jail". Remove all the permissions from the Jailed role and then only allow members with the Jailed role to send messages in Jail.', inline: true },
		{ name: '**Report Channel**', value: 'Create a channels called "reports". This channel is where your user reports will appear for moderators to see. ' },
	)
	.setTimestamp()

	message.channel.send(exampleEmbed)
}}