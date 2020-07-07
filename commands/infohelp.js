const Discord = require('discord.js');

module.exports = {
	name: 'infohelp',
	description: 'help!',
    execute (message, args) {
		
		let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
		let color = message.member.displayHexColor;
        if (color == '#000000') color = message.member.hoistRole.hexColor;
// inside a command, event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor(color)
    .setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
    .setTitle('**Info Commands**')
	//.setTitle('**Do ",setup" to use Sonar to her max potential!**')
	.setThumbnail (`https://i.imgur.com/kdCSckc.png`)
	.setDescription('Prefix: ,')
	.addFields(
        //	{ name: '**Info**', value: '`status`  `weather`  `spotify`   `corona/covid`  `roleinfo`   `av`  `ping`  `help`  `setup`  `emoji`  `background`  `commandlist`  `changelog`  `supportserver`', inline: true },
        { name: "**Status** - Show's a user's status.", value: 'Usage: ,status @{member} ', inline: false },
        { name: "**Weather** - Shows the weather for a city.", value: 'Usage: ,weather {city name} ', inline: false },
        { name: "**Spotify** - Show's what song a user is listening to on Spotify.", value: 'Usage: ,spotify @{member} ', inline: false },
        { name: "**Covid** - Shows the global or country statistics for COVID-19.", value: 'Usage: ,covid {country name} OR ,covid all.', inline: false },
        { name: "**Roleinfo** - Shows the info of a role.", value: 'Usage: ,roleinfo {role name} ', inline: false },
        { name: "**Userinfo** - Shows info about your account.", value: 'Usage: ,userinfo ', inline: false },
        { name: "**Channelinfo** - Shows info about a server channel.", value: 'Usage: ,channelinfo {channel name} ', inline: false },
        { name: "**Rolememberinfo** - Shows every member who has a certain role.", value: 'Usage: ,rolememberinfo {role name} ', inline: false },
        { name: "**Serverinfo** - Shows info about the server.", value: 'Usage: ,serverinfo ', inline: false },
       // { name: "**av - Shows a user's avatar.**", value: 'Usage: ,av @{member} ', inline: false },
       { name: "**Urban** - Shows the definition of a word from Urban Dictionary.", value: 'Usage: ,urban {word}', inline: false },
        { name: "**Wikipedia** - Shows a definition from Wikipedia.", value: 'Usage: ,wikipedia {word}', inline: false },
        { name: "**Ping** - Shows the bot's latency.", value: 'Usage: ,ping ', inline: false },
        { name: "**Help** - Shows the bot's help panel.", value: 'Usage: ,help ', inline: false },
        { name: "**Setup** - Shows the bot's setup panel. (useful)", value: 'Usage: ,setup ', inline: false },
        { name: "**Commandlist** - Sends a form for the full list of commands.", value: 'Usage: ,commandlist ', inline: false },
        { name: "**Uptime** - Shows how long the bot has been online.", value: 'Usage: ,uptime ', inline: false },
        { name: "**Userinfo** - Displays info about a user.", value: 'Usage: ,userinfo {member} ', inline: false },
        { name: "**News** - Replies with 3 of the latest world news headlines. ", value: 'Usage: ,news ', inline: false },
        { name: "**YTsearch** - Searches youtube for a video. Shows first 5 results. ", value: 'Usage: ,ytsearch {video name} ', inline: false },
        
		
	)
    
message.author.send(exampleEmbed)
if(message.content === ",infohelp"){
    message.react('✅')
    }}}