const Discord = require('discord.js');

module.exports = {
	name: 'senskin',
	description: 'Creates an instant invite',
	run: async (bot, message, args) => {  		
		let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
		
// inside a command, event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor(`#faf6f6`)
    .setTitle(`Sen's Osu Skin`)
    .setURL('https://wi.to/9f1a1d27042e1d13')
	.setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
	

    message.channel.send(exampleEmbed)
	}}

