const Discord = require('discord.js');

module.exports = {
	name: 'supportserver',
	description: 'help!',
	execute(message, args) {
	
		let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;

// inside a command, event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
    .setTitle('Click this link to join the Sonar support server!')
    .setURL('https://discord.com/invite/XT8uM7')
	.setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
	
	.setTimestamp()

    message.channel.send(exampleEmbed)
    }}