const Discord = require('discord.js');

module.exports = {
	name: 'changelog',
    description: 'help!',
    aliases: ["changes", "cl"],
	execute(message, args) {
		
		let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;

// inside a command, event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
    .setTitle('6/2/2020')
    .setDescription("Don't forget the check the Command List for info on new commands!")
	.setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
	.setThumbnail (`https://i.imgur.com/h1ekMX8.png`)
	.addFields(
		{ name: '**Added multiple commands.**', value: "Added 'channelinfo command, clyde command, rolememberinfo command, tweet command, meme command, addrole command, removerole command, setnick command. "},
		{ name: '**Updated multiple commands.**', value: "Re-worked the 'Ban', 'unban', and 'kick' commands."}
	)
	.setTimestamp()

	message.channel.send(exampleEmbed)
}}