const Discord = require('discord.js');

module.exports = {
	name: 'adminhelp',
	description: 'help!',
	execute (message, args) {
		
		let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
		let color = message.member.displayHexColor;
        if (color == '#000000') color = message.member.hoistRole.hexColor;
// inside a command, event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor(color)
    .setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
    .setTitle('**Administrator Commands**')
	//.setTitle('**Do ",setup" to use Sonar to her max potential!**')
	.setThumbnail (`https://i.imgur.com/kdCSckc.png`)
	.setDescription('Prefix: ,')
	.addFields(
        { name: "**Purge** - Deletes previous messages in a mass amount.", value: 'Usage: ,purge {number of messages} ', inline: false },
        { name: "**Slowmode** - Sets the slowmode for a channel.", value: 'Usage: ,slowmode {time in seconds} {reason} ', inline: false },
        { name: "**Lockdown** - Locks a channel.", value: 'Usage: ,lockdown ', inline: false },
		{ name: "**Unlock** - Unlocks a locked channel.", value: 'Usage: ,unlock ', inline: false },
		{ name: "**Channelsync** - Syncs and channels permissions with the category.", value: 'Usage: ,channelsync ', inline: false },
       
        
		
	)
    
message.author.send(exampleEmbed)
if(message.content === ",adminhelp"){
    message.react('✅')
    }}}