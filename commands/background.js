const Discord = require('discord.js');

module.exports = {
	name: 'background',
	description: 'more about mirai',
	execute(message, args) {
		

// inside a command, event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('***Here is some of the background behind Mirai and the creation of this bot...***')
	.setAuthor('Sen#1143', 'https://i.imgur.com/ilVV4ya.jpg')
	.addFields(
		{ name: '*Story Time:*', value: 'Mirai was and still is a simple one-person project that was made only for Sen and some of his friends. It started off as only something to try for fun but ended up growing into a full project with goals and expectations! Mirai was made with Javascript and will continue to be made with this language for as long as possible. ' },
        {name: '*Fun Fact:*', value: "*Mirai was originally supposed to be made with Python but was shortly moved to Javascript due to Sen's lack of Python knowledge.*"}
    )
	.setTimestamp()

	message.channel.send(exampleEmbed)
}}