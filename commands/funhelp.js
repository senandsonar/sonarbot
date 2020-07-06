const Discord = require('discord.js');

module.exports = {
	name: 'funhelp',
	description: 'help!',
	execute (message, args) {
		
		let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
		let color = message.member.displayHexColor;
        if (color == '#000000') color = message.member.hoistRole.hexColor;
// inside a command, event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor(color)
    .setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
    .setTitle('**Fun Commands**')
	//.setTitle('**Do ",setup" to use Sonar to her max potential!**')
	.setThumbnail (`https://i.imgur.com/kdCSckc.png`)
	.setDescription('Prefix: ,')
	.addFields(
        //{ name: '**Miscellaneous**', value: ' `number`  `report`  `poll`  `8ball`  `inviteme`  `define`  `reddit`  `coinflip`  `uptime`', inline: true },
        //	{ name: '**Info**', value: '`status`  `weather`  `spotify`   `corona/covid`  `roleinfo`   `av`  `ping`  `help`  `setup`  `emoji`  `background`  `commandlist`  `changelog`  `supportserver`', inline: true },
        { name: "**Reddit** - Shows a random image from a subreddit.", value: 'Usage: ,reddit {subreddit name without r/} ', inline: false },
        { name: "**av** - Shows a user's avatar.", value: 'Usage: ,av @{member} ', inline: false },
        { name: "**Emoji** - Shows the server's emoji's.", value: 'Usage: ,emoji ', inline: false },
        { name: "**Coinflip** - Flips a coin.", value: 'Usage: ,coinflip ', inline: false },
        { name: "**Poll** - Start's a poll in a channel.", value: 'Usage: ,poll {poll question} ', inline: false },
        { name: "**Post** - Makes a reddit-style post.", value: 'Usage: ,post {post content} ', inline: false },
        { name: "**Number** - Generates a random number from 1-100.", value: 'Usage: ,number ', inline: false },
        { name: "**8ball** - Plays 8ball.", value: 'Usage: ,8ball {question}', inline: false },
        { name: "**Define** - Shows the definition of a word from Urban Dictionary.", value: 'Usage: ,define {word}', inline: false },
        { name: "**Wikisearch** - Shows a definition from Wikipedia.", value: 'Usage: ,wikisearch {word}', inline: false },
        { name: "**Tweet** - Creates your own mock twitter post.", value: 'Usage: ,tweet {twitter nickname} {message in the tweet}', inline: false },
        { name: "**Clyde** - Discord's Clyde bot says whatever you want.", value: 'Usage: ,clyde {message}', inline: false },
        { name: "**Meme** - Sends a random meme from a random subreddit.", value: 'Usage: ,meme', inline: false },
        { name: "**Catgirl** - Sends a random anime catgirl!", value: 'Usage: ,catgirl', inline: false },
        { name: "**Kyaru** - Sends a random picture of kyaru.", value: 'Usage: ,kyaru', inline: false },
        { name: "**Arknights** - Sends a random image from the arknights subreddit!", value: 'Usage: ,arknights', inline: false },
        { name: "**Roast** - Roasts a user.", value: 'Usage: ,roast {user}', inline: false },
        { name: "**Motivation** - Sends a motivational quote.", value: 'Usage: ,motivation', inline: false },
        { name: "**Gif** - Sends a gif based on a word.", value: 'Usage: ,gif {word}', inline: false },
        { name: "**Captcha** - Sends a captcha of a user's avatar.", value: 'Usage: ,captcha {user}', inline: false },
        { name: "**Instastats** - Sends statistics of a Instagram account.", value: 'Usage: ,instastats {instagram name}', inline: false },
        { name: "**Fire** - Sends a picture of a users pfp being set on fire.", value: 'Usage: ,fire {user}', inline: false },
        { name: "**Love** - Sends a picture of a two users love.", value: 'Usage: ,love {user 1} {user 2}', inline: false },
        { name: "**LShip** - Ships two users.", value: 'Usage: ,ship {user 1} {user 2}', inline: false },
	)
    
message.author.send(exampleEmbed)
if(message.content === ",funhelp"){
    message.react('✅')
    }}}