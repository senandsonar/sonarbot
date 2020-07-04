// at the top of your file
const Discord = require('discord.js');

module.exports = {
	name: 'help',
	description: 'help!',
	execute(message, args) {
		
		let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
		let color = message.member.displayHexColor;
        if (color == '#000000') color = message.member.hoistRole.hexColor;
// inside a command, event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor(color)
	.setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
	.setTitle('**Use ",setup".**')
	.setThumbnail (`https://i.imgur.com/kdCSckc.png`)
	.setDescription('Prefix: ,')
	.addFields(
                { name: '**Moderation Commands (,modhelp)**', value: 'All the moderation commands Senbot has to offer.' },
       // { name: '\u200B', value: '\u200B' },
                { name: '**Info Commands (,infohelp)**', value: 'APIs that Senbot has access to and other informative commands.', inline: false },
       // { name: '\u200B', value: '\u200B' },
				{ name: '**Fun Commands (,funhelp)**', value: 'Some fun commands that Senbot can do.', inline: false },
				{ name: '**Miscellaneous Commands (,mischelp)**', value: 'Unique miscellaneous commands. ', inline: false },
        
        



		//{ name: '**Extras**', value: '***Sonar was made by Sen#4444. Additional commands will be added to this bot over time and the help command will be updated to include anything new.***'},
	)
    .setTimestamp()
    .setFooter('Run ,<category in brackets>. | Invite me: ,inviteme');






	message.channel.send(exampleEmbed)
}}