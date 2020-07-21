const Discord = require('discord.js');

module.exports = {
	name: 'changelog',
    description: 'help!',
    aliases: ["changes", "cl"],
	run: async (bot, message, args) => {  		
		let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
		let color = message.member.displayHexColor;
        if (color == '#000000') color = message.member.hoistRole.hexColor;
// inside a command, event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor(color)
    .setTitle('7/6/2020')
    .setDescription("Don't forget the check the Command List for info on new commands!")
	.setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
	.setThumbnail (`https://i.imgur.com/h1ekMX8.png`)
	.addFields(
		{ name: '**Added a command.**', value: "Added 'instasearch' command. "},
		
	)
	.setTimestamp()

	message.channel.send(exampleEmbed)
}}