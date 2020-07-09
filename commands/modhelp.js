// at the top of your file
const Discord = require('discord.js');

module.exports = {
	name: 'modhelp',
	description: 'help!',
	execute (message, args) {
		
		let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
		let color = message.member.displayHexColor;
        if (color == '#000000') color = message.member.hoistRole.hexColor;
// inside a command, event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor(color)
    .setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
    .setTitle('**Moderation Commands**')
	//.setTitle('**Do ",setup" to use Sonar to her max potential!**')
	.setThumbnail (`https://i.imgur.com/kdCSckc.png`)
	.setDescription('Prefix: ,')
	.addFields(
        //{ name: '**Moderation**', value: '`ban`  `unban`  `mute`  `unmute`  `purge`  `jail`  `unjail`  `slowmode`  `dm`'inline: false },
        { name: "**Ban** - Ban's and user from the server.", value: 'Usage: ,ban @{member} ', inline: false },
        { name: "**Unban** - Unban's a previous server member.", value: 'Usage: ,kick {user} {reason}', inline: false },
        { name: "**Warn** - Warns a user.", value: 'Usage: ,warn {user} {reason}', inline: false },
        { name: "**Kick** - Kick's a user from the server.", value: 'Usage: ,unban {user ID} ', inline: false },
        { name: "**Mute** - Disables a users perms to message in a channel.", value: 'Usage: ,mute {member}', inline: false },
        { name: "**Unmute** - Unmutes a muted user.", value: 'Usage: ,unmute {member} ', inline: false },
        { name: "**Jail** - Jails a user.", value: 'Usage: ,jail @{member} {reason} ', inline: false },
        { name: "**Unjail** - Unjails a jailed user.", value: 'Usage: ,unjail @{member} ', inline: false },
        { name: "**Setnick** - Sets a users nickname.", value: 'Usage: ,setnick {user} {nickname} ', inline: false },
        { name: "**Addrole** - Add's a role to a user.", value: 'Usage: ,addrole {user} {role name} ', inline: false },
        { name: "**Removerole** - Remove's a role from a user.", value: 'Usage: ,removerole {user} {role name} ', inline: false },
        
		
	)
    
message.author.send(exampleEmbed)
if(message.content === ",modhelp"){
    message.react('✅')
    }}}