const Discord = require('discord.js');

module.exports = {
	name: 'commandlist',
	description: 'help!',
	execute(message, args) {
		
		let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
		let color = message.member.displayHexColor;
        if (color == '#000000') color = message.member.hoistRole.hexColor;
// inside a command, event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor(color)
	.setTitle('**Here is a list of the commands and what they do and how to use them.**')
    .setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
    .setURL('https://docs.google.com/document/d/1pphwd2FcdDeyrwsYI0xzMF85tey23E0iSdOBOUezf2w/edit')
	.setTimestamp()

	message.channel.send(exampleEmbed)
}}