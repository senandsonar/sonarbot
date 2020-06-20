const Discord = require('discord.js');

module.exports = {
	name: 'inviteme',
	description: 'Creates an instant invite',
	execute(message, args) {
		
		let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;

// inside a command, event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
    .setTitle('Click this link to invite me to your server!')
    .setURL('https://discord.com/api/oauth2/authorize?client_id=713353758913986562&permissions=2085219575&scope=bot')
	.setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
	

    message.channel.send(exampleEmbed)
	}}
	