const Discord = require('discord.js');

module.exports = {
	name: 'officialserver',
	description: 'help!',
	run: async (bot, message, args) => {  		
		let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
		let color = message.member.displayHexColor;
        if (color == '#000000') color = message.member.hoistRole.hexColor;
// inside a command, event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor(color)
    .setTitle('Click this link to join the official Sonar server!')
    .setURL('https://discord.gg/VbDchG')
	.setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
	
	.setTimestamp()

    message.channel.send(exampleEmbed)
    }}