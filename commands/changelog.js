const Discord = require('discord.js');

module.exports = {
	name: 'changelog',
    description: 'help!',
    aliases: ["changes", "cl"],
	execute(message, args) {
		

// inside a command, event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
    .setTitle('6/15/2020')
    .setDescription("Don't forget the check the Command List for info on new commands!")
	.setAuthor('Sen#1143', 'https://i.imgur.com/ilVV4ya.jpg')
	.setThumbnail (`https://i.imgur.com/h1ekMX8.png`)
	.addFields(
		{ name: '**Added a command.**', value: 'Added "changelog" command.' },
        { name: '**Updated a command.**', value: 'Updated "help" command.' },
        { name: '**Updated a command.**', value: 'Changed the name of the "quickhelp" command to "commandlist"' },
        { name: '**Added a command.**', value: 'Added "dm" command.' },
        { name: '**Added a command.**', value: 'Added "supportserver" command.' },
        { name: '**Added a command.**', value: 'Added "officialserver" command.' },
        
	)
	.setTimestamp()

	message.channel.send(exampleEmbed)
}}