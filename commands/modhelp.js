// at the top of your file
const Discord = require('discord.js');

module.exports = {
	name: 'modhelp',
	description: 'help!',
	execute (message, args) {
		
		let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
		
// inside a command, event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
    .setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
    .setTitle('**Moderation Commands**')
	//.setTitle('**Do ",setup" to use Sonar to her max potential!**')
	.setThumbnail (`https://i.imgur.com/h1ekMX8.png`)
	.setDescription('Prefix: ,')
	.addFields(
        //{ name: '**Moderation**', value: '`ban`  `unban`  `mute`  `unmute`  `purge`  `jail`  `unjail`  `slowmode`  `dm`'inline: false },
        { name: "**Ban - Ban's and user from the server.**", value: 'Usage: ,ban @{member} ', inline: false },
        { name: "**Unban - Unban's a previous server member.**", value: 'Usage: ,unban {user ID} ', inline: false },
        { name: "**Mute - Mute's a user.**", value: 'Usage: ,mute @{member} {reason} ', inline: false },
        { name: "**Unmute - Unmutes a muted user.**", value: 'Usage: ,unmute @{member} ', inline: false },
        { name: "**Purge - Deletes previous messages in a mass amount.**", value: 'Usage: ,purge {number of messages} ', inline: false },
        { name: "**Jail - Jails a user.**", value: 'Usage: ,jail @{member} {reason} ', inline: false },
        { name: "**Unjail - Unjails a jailed user.**", value: 'Usage: ,unjail @{member} ', inline: false },
        { name: "**Slowmode - Sets the slowmode for a channel.**", value: 'Usage: ,slowmode {time in seconds} {reason} ', inline: false },
        
		
	)
    
message.author.send(exampleEmbed)
message.channel.send('Help Sent. ✅  ')
    }}