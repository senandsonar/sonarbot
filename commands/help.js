// at the top of your file
const Discord = require('discord.js');

module.exports = {
	name: 'help',
	description: 'help!',
	execute(message, args) {
		
		let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
		
// inside a command, event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
	.setTitle('**Do ",setup" to use Sonar to her max potential!**')
	.setThumbnail (`https://i.imgur.com/h1ekMX8.png`)
	.setDescription('Prefix: ,')
	.addFields(
		{ name: '**Moderation**', value: 'ban | unban | mute | unmute | purge | jail | unjail | slowmode | dm' },
		{ name: '**Miscellaneous**', value: 'status | weather | spotify | number | report | corona/covid | roleinfo | poll | 8ball | av | ping | help | setup | invite | emoji | define | background | commandlist | reddit | changelog | supportserver', inline: true },
		{ name: '**Extras**', value: '***Sonar was made by Sen#1143. Additional commands will be added to this bot over time and the help command will be updated to include anything new.***'},
	)
	.setTimestamp()

	message.channel.send(exampleEmbed)
}}