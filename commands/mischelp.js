const Discord = require('discord.js');

module.exports = {
	name: 'mischelp',
	description: 'help!',
	execute (message, args) {
		
		let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
		
// inside a command, event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('BLACK')
    .setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
    .setTitle('**Miscellaneous Commands**')
	//.setTitle('**Do ",setup" to use Sonar to her max potential!**')
	.setThumbnail (`https://i.imgur.com/h1ekMX8.png`)
	.setDescription('Prefix: ,')
	.addFields(
        //{ name: '**Miscellaneous**', value: ' `report`  `inviteme` ', inline: true },
        //	{ name: '**Info**', value: '`background` `changelog`  `supportserver`', inline: true },
        { name: "**Report** - Sends a report of a user into a reports channel.", value: 'Usage: ,report @{user} {reason} ', inline: false },
        { name: "**Inviteme** - Creates an instant invite for the bot.", value: 'Usage: ,inviteme ', inline: false },
        { name: "**Background** - Shows the story behind Senbot.", value: 'Usage: ,background ', inline: false },
        { name: "**Changelog** - Shows the bot's changelog.", value: 'Usage: ,changelog ', inline: false },
        { name: "**Supportserver** - Creates an instant invite for Senbot's support server.", value: 'Usage: ,supportserver ', inline: false },	
        { name: "**Invites** - Shows user's who joined through a someones invites.", value: 'Usage: ,invites {user} ', inline: false },
        { name: "**Calculate** - Calculates math equations. ", value: 'Usage: ,calculate {equation} ', inline: false },
	)
    
message.author.send(exampleEmbed)
message.channel.send('Help Sent. ✅  ')
    }}