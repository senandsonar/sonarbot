const Discord = require('discord.js');

module.exports = {
	name: 'funhelp',
	description: 'help!',
	execute (message, args) {
		
		let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
		
// inside a command, event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
    .setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
    .setTitle('**Fun Commands**')
	//.setTitle('**Do ",setup" to use Sonar to her max potential!**')
	.setThumbnail (`https://i.imgur.com/h1ekMX8.png`)
	.setDescription('Prefix: ,')
	.addFields(
        //{ name: '**Miscellaneous**', value: ' `number`  `report`  `poll`  `8ball`  `inviteme`  `define`  `reddit`  `coinflip`  `uptime`', inline: true },
        //	{ name: '**Info**', value: '`status`  `weather`  `spotify`   `corona/covid`  `roleinfo`   `av`  `ping`  `help`  `setup`  `emoji`  `background`  `commandlist`  `changelog`  `supportserver`', inline: true },
        { name: "**Reddit** - Shows a random image from a subreddit.", value: 'Usage: ,reddit {subreddit name without r/} ', inline: false },
        { name: "**av** - Shows a user's avatar.", value: 'Usage: ,av @{member} ', inline: false },
        { name: "**Emoji** - Shows the server's emoji's.", value: 'Usage: ,emoji ', inline: false },
        { name: "**Coinflip** - Flips a coin.", value: 'Usage: ,coinflip ', inline: false },
        { name: "**av** - Shows a user's avatar.", value: 'Usage: ,av @{member} ', inline: false },
        { name: "**Poll** - Start's a poll in a channel.", value: 'Usage: ,av @{member} ', inline: false },
        { name: "**Number** - Generates a random number from 1-100.", value: 'Usage: ,number ', inline: false },
        { name: "**8ball** - Plays 8ball.", value: 'Usage: ,8ball {question}', inline: false },
        { name: "**Define** - Shows the definition of a word from Urban Dictionary.", value: 'Usage: ,define {word}', inline: false },
        { name: "**Tweet** - Creates your own mock twitter post.", value: 'Usage: ,tweet {twitter nickname} {message in the tweet}', inline: false },
        { name: "**Clyde** - Discord's Clyde bot says whatever you want.", value: 'Usage: ,clyde {message}', inline: false },
        { name: "**Meme** - Sends a random meme from a random subreddit.", value: 'Usage: ,meme', inline: false },
	)
    
message.author.send(exampleEmbed)
message.channel.send('Help Sent. ✅  ')
    }}