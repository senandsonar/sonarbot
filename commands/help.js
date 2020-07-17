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

if (args.length == 0){ 
const exampleEmbed = new Discord.MessageEmbed()
	.setColor(color)
	.setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
	.setTitle('**Use ",setup".**')
	.setThumbnail (`https://i.imgur.com/kdCSckc.png`)
	.setDescription('Prefix: ,')
	.addFields(
				{ name: '**Moderation Commands **', value: 'All the moderation commands Senbot has to offer.' },
				{ name: '**Admin Commands **', value: 'Commands that require high perms to execute.' },
       // { name: '\u200B', value: '\u200B' },
                { name: '**Info Commands **', value: 'APIs that Senbot has access to and other informative commands.', inline: false },
       // { name: '\u200B', value: '\u200B' },
				{ name: '**Fun Commands **', value: 'Some fun commands that Senbot can do.', inline: false },
				{ name: '**Miscellaneous Commands **', value: 'Unique miscellaneous commands. ', inline: false },
        
        



		//{ name: '**Extras**', value: '***Sonar was made by Sen#4444. Additional commands will be added to this bot over time and the help command will be updated to include anything new.***'},
	)
    .setTimestamp()
    .setFooter('Run ,help <category> | Invite me: ,inviteme');






	message.channel.send(exampleEmbed)
	}
	if (args.length > 0){
	const adminEmbed = new Discord.MessageEmbed()
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
		{ name: "**Channelsync** - Syncs a channels permissions with the category permissions.", value: 'Usage: ,channelsync ', inline: false },
		{ name: "**Hidechannel** - Hides a channel from everyone.", value: 'Usage: ,hidechannel ', inline: false },
		{ name: "**Revealchannel** - Reveals a channel to everyone.", value: 'Usage: ,revealchannel ', inline: false },
       
        
		
	)
    


	if(message.content.includes("admin")){
	message.react('730967576007671929')
	return message.author.send(adminEmbed)
	
	

}}
	if (args.length > 0){
	const infoEmbed = new Discord.MessageEmbed()
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
        { name: "**Rolelist** - Shows a list of all the roles in the server. ", value: 'Usage: ,rolelist ', inline: false },
        
		
	)
    
	
	if(message.content.includes("info")){
		message.react('730967576007671929')
		return message.author.send(infoEmbed)
		
		}


		if (args.length > 0){
			const modEmbed = new Discord.MessageEmbed()
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
			
			if(message.content.includes("mod")){
				message.react('730967576007671929')
				return message.author.send(modEmbed)
				
				}

				
	if (args.length > 0){
	const funEmbed = new Discord.MessageEmbed()
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
        { name: "**Ship** - Ships two users.", value: 'Usage: ,ship {user 1} {user 2}', inline: false },
		{ name: "**Fun** - Pats a user.", value: 'Usage: ,pat {user}', inline: false },
		
        
	)
	if(message.content.includes("fun")){
		message.react('730967576007671929')
		return message.author.send(funEmbed)
	}
	
	
	
	
	if (args.length > 0){
		const miscEmbed = new Discord.MessageEmbed()
		.setColor(color)
		.setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
		.setTitle('**Miscellaneous Commands**')
		//.setTitle('**Do ",setup" to use Sonar to her max potential!**')
		.setThumbnail (`https://i.imgur.com/kdCSckc.png`)
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

		if(message.content.includes("misc")){
			message.react('730967576007671929')
			return message.author.send(miscEmbed)
		}
	}}}}}}
	

