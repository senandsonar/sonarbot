const Discord = require('discord.js');

module.exports = {
	name: 'background',
	description: 'more about sonar',
	execute(message, args) {
		
		let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;

// inside a command, event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('***Here is some of the background behind Sonar and the creation of this bot...***')
	.setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
	.addFields(
		{name: '*Story Time:*', value: 'Sonar was and still is a simple one-person project that was made only for Sen and some of his friends. It started off as only something to try for fun but ended up growing into a full project with goals and expectations! Sonar was made with Javascript and will continue to be made with this language for as long as possible. ' },
        {name: '*Fun Fact:*', value: "*Sonar was originally supposed to be made with Python but was shortly moved to Javascript due to Sen's lack of Python knowledge.*"}
    )
	.setTimestamp()

	message.channel.send(exampleEmbed)
}}