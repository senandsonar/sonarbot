// at the top of your file
const { MessageEmbed } = require('discord.js')
const { PREFIX } = require("../config.json");


module.exports = {
	name: 'help',
	description: 'help!',
	run: async(bot, message, args) => {
		
		let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
		let color = message.member.displayHexColor;
        if (color == '#000000') color = message.member.hoistRole.hexColor;
// inside a command, event listener, etc.

if (args.length == 0){ 
const exampleEmbed = new MessageEmbed()
	.setColor(color)
	.setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
	.setTitle('**Use ",setup".**')
	.setThumbnail(bot.user.displayAvatarURL())
	.setDescription(`Prefix: ${PREFIX}`)
	.addFields(
				{ name: '**Moderation Commands **', value: `All the moderation commands ${bot.user.username} has to offer.` },
				{ name: '**Admin Commands **', value: 'Commands that require high perms to execute.' },
       // { name: '\u200B', value: '\u200B' },
				{ name: '**Info Commands **', value: `APIs that ${bot.user.username} has access to and other informative commands.`, inline: false },
				{ name: '**Image Commands **', value: 'Commands that feature images.'},
       // { name: '\u200B', value: '\u200B' },
				{ name: '**Fun Commands **', value: `Some fun commands that ${bot.user.username} can do.`, inline: false },
				{ name: '**Miscellaneous Commands **', value: 'Unique miscellaneous commands. ', inline: false },
        
        



		//{ name: '**Extras**', value: '***Sonar was made by Sen#4444. Additional commands will be added to this bot over time and the help command will be updated to include anything new.***'},
	)
    .setTimestamp()
    .setFooter('Run ,help <category> | Invite me: ,inviteme');






	message.channel.send(exampleEmbed)
	}
	if (args.length > 0){
	const adminEmbed = new MessageEmbed()
	.setColor(color)
    .setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
    .setTitle('**Administrator Commands**')
	//.setTitle('**Do ",setup" to use Sonar to her max potential!**')
	.setThumbnail(bot.user.displayAvatarURL())
	.setDescription(`Prefix: ${PREFIX}`)
	.addFields(
        { name: "**Purge** - Deletes previous messages in a mass amount.", value: 'Aliases: delete, clear ', inline: false },
        { name: "**Slowmode** - Sets the slowmode for a channel.", value: 'Aliases: sm, smode ', inline: false },
        { name: "**Lockdown** - Locks a channel.", value: 'Aliases: lock ', inline: false },
		{ name: "**Unlock** - Unlocks a locked channel.", value: 'Aliases: No Aiases ', inline: false },
		{ name: "**Channelsync** - Syncs a channels permissions with the category permissions.", value: 'Aliases: csync ', inline: false },
		{ name: "**Hidechannel** - Hides a channel from everyone.", value: 'Aliases: chide ', inline: false },
		{ name: "**Revealchannel** - Reveals a channel to everyone.", value: 'Aliases: creveal ', inline: false },
       
        
		
	)
    


	if(message.content.includes("admin")){
	message.react('730967576007671929')
	return message.author.send(adminEmbed)
	
	

}}
	if (args.length > 0){
	const infoEmbed = new MessageEmbed()
	.setColor(color)
    .setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
    .setTitle('**Info Commands**')
	//.setTitle('**Do ",setup" to use Sonar to her max potential!**')
	.setThumbnail(bot.user.displayAvatarURL())
	.setDescription(`Prefix: ${PREFIX}`)
	.addFields(
        //	{ name: '**Info**', value: '`status`  `weather`  `spotify`   `corona/covid`  `roleinfo`   `av`  `ping`  `help`  `setup`  `emoji`  `background`  `commandlist`  `changelog`  `supportserver`', inline: true },
        { name: "**Status** - Show's a user's status.", value: 'Aliases: No Aliases ', inline: false },
        { name: "**Weather** - Shows the weather for a city.", value: 'Aliases: No Aliases ', inline: false },
        { name: "**Spotify** - Show's what song a user is listening to on Spotify.", value: 'Aliases: No Aliases ', inline: false },
        { name: "**Covid** - Shows the global or country statistics for COVID-19.", value: 'Aliases: corona, covid19', inline: false },
        { name: "**Roleinfo** - Shows the info of a role.", value: 'Aliases: rinfo ', inline: false },
        { name: "**Userinfo** - Shows info about your account.", value: 'Aliases: uinfo ', inline: false },
        { name: "**Channelinfo** - Shows info about a server channel.", value: 'Aliases: cinfo ', inline: false },
        { name: "**Rolememberinfo** - Shows every member who has a certain role.", value: 'Aliases: rminfo ', inline: false },
        { name: "**Serverinfo** - Shows info about the server.", value: 'Aliases: sinfo ', inline: false },
       // { name: "**av - Shows a user's avatar.**", value: 'Aliases: ,av @{member} ', inline: false },
       	{ name: "**Urban** - Shows the definition of a word from Urban Dictionary.", value: 'Aliases: No Aliases', inline: false },
        { name: "**Wikipedia** - Shows a definition from Wikipedia.", value: 'Aliases: wiki', inline: false },
        { name: "**Ping** - Shows the bot's latency.", value: 'Aliases: latency ', inline: false },
        { name: "**Help** - Shows the bot's help panel.", value: 'Aliases: No Aliases ', inline: false },
        { name: "**Setup** - Shows the bot's setup panel. (useful)", value: 'Aliases: No Aliases', inline: false },
        { name: "**Commandlist** - Sends a form for the full list of commands.", value: 'Aliases: clist ', inline: false },
        { name: "**Uptime** - Shows how long the bot has been online.", value: 'Aliases: No Aliases ', inline: false },
        { name: "**Userinfo** - Displays info about a user.", value: 'Aliases: ,uinfo ', inline: false },
        { name: "**News** - Replies with 3 of the latest world news headlines. ", value: 'Aliases: No Aliases ', inline: false },
        { name: "**YTsearch** - Searches youtube for a video. Shows first 5 results. ", value: 'Aliases: yt ', inline: false },
        { name: "**Rolelist** - Shows a list of all the roles in the server. ", value: 'Aliases: rlist ', inline: false },
        
		
	)
    
	
	if(message.content.includes("info")){
		message.react('730967576007671929')
		return message.author.send(infoEmbed)
		
		}


		if (args.length > 0){
			const modEmbed = new MessageEmbed()
			.setColor(color)
			.setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
			.setTitle('**Moderation Commands**')
			//.setTitle('**Do ",setup" to use Sonar to her max potential!**')
			.setThumbnail(bot.user.displayAvatarURL())
			.setDescription(`Prefix: ${PREFIX}`)
			.addFields(
				//{ name: '**Moderation**', value: '`ban`  `unban`  `mute`  `unmute`  `purge`  `jail`  `unjail`  `slowmode`  `dm`'inline: false },
				{ name: "**Ban** - Ban's and user from the server.", value: 'Aliases: No Aliases', inline: false },
				{ name: "**Unban** - Unban's a previous server member.", value: 'Aliases: No Aliases', inline: false },
				{ name: "**Warn** - Warns a user.", value: 'Aliases: No Aliases', inline: false },
				{ name: "**Kick** - Kick's a user from the server.", value: 'Aliases: No Aliases ', inline: false },
				{ name: "**Mute** - Disables a users perms to message in a channel.", value: 'Aliases: No Aliases', inline: false },
				{ name: "**Unmute** - Unmutes a muted user.", value: 'Aliases: No Aliases ', inline: false },
				{ name: "**Jail** - Jails a user.", value: 'Aliases: No Aliases ', inline: false },
				{ name: "**Unjail** - Unjails a jailed user.", value: 'Aliases: No Aliases ', inline: false },
				{ name: "**Setnick** - Sets a users nickname.", value: 'Aliases: snick', inline: false },
				{ name: "**Addrole** - Add's a role to a user.", value: 'Aliases: ar ', inline: false },
				{ name: "**Removerole** - Remove's a role from a user.", value: 'Aliases: rr ', inline: false },
				
				
			)
			
			if(message.content.includes("mod")){
				message.react('730967576007671929')
				return message.author.send(modEmbed)
				
				}

				
	if (args.length > 0){
	const funEmbed = new MessageEmbed()
	.setColor(color)
    .setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
    .setTitle('**Fun Commands**')
	//.setTitle('**Do ",setup" to use Sonar to her max potential!**')
	.setThumbnail(bot.user.displayAvatarURL())
	.setDescription(`Prefix: ${PREFIX}`)
	.addFields(
       
        { name: "**Emoji** - Shows the server's emoji's.", value: 'Aliases: No Aliases', inline: false },
        { name: "**Coinflip** - Flips a coin.", value: 'Aliases: cf ', inline: false },
        { name: "**Poll** - Start's a poll in a channel.", value: 'Aliases: No Aliases ', inline: false },
        { name: "**Post** - Makes a reddit-style post.", value: 'Aliases: No Aliases ', inline: false },
        { name: "**8ball** - Plays 8ball.", value: 'Aliases: No Aliases', inline: false },
        { name: "**Motivation** - Sends a motivational quote.", value: 'Aliases: motivate, motivational', inline: false },
        { name: "**Captcha** - Sends a captcha of a user's avatar.", value: 'Aliases: No Aliases', inline: false },
        { name: "**Instastats** - Sends statistics of a Instagram account.", value: 'Aliases: searchinsta, sinsta', inline: false },
        { name: "**Ship** - Ships two users.", value: 'Aliases: No Aliases', inline: false },
		{ name: "**Pat** - Pats a user.", value: 'Aliases: No Aliases', inline: false },
		{ name: "**Say** - Makes the bot say something.", value: 'Aliases: No Aliases', inline: false },
        
		
        
	)
	if(message.content.includes("fun")){
		message.react('730967576007671929')
		return message.author.send(funEmbed)
	}
	
	
	
	
	if (args.length > 0){
		const miscEmbed = new MessageEmbed()
		.setColor(color)
		.setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
		.setTitle('**Miscellaneous Commands**')
		//.setTitle('**Do ",setup" to use Sonar to her max potential!**')
		.setThumbnail(bot.user.displayAvatarURL())
		.setDescription(`Prefix: ${PREFIX}`)
		.addFields(
			//{ name: '**Miscellaneous**', value: ' `report`  `inviteme` ', inline: true },
			//	{ name: '**Info**', value: '`background` `changelog`  `supportserver`', inline: true },
			{ name: "**Report** - Sends a report of a user into a reports channel.", value: 'Aliases: No Aliases ', inline: false },
			{ name: "**Inviteme** - Creates an instant invite for the bot.", value: 'Aliases: No Aliases ', inline: false },
			{ name: "**Background** - Shows the story behind Senbot.", value: 'Aliases: bg ', inline: false },
			{ name: "**Changelog** - Shows the bot's changelog.", value: 'Aliases: changes, cl ', inline: false },
			{ name: "**Supportserver** - Creates an instant invite for Senbot's support server.", value: 'Aliases: No Aliases ', inline: false },	
			{ name: "**Invites** - Shows user's who joined through a someones invites.", value: 'Aliases: invs ', inline: false },
			{ name: "**Calculate** - Calculates math equations. ", value: 'Aliases: calc, calculator ', inline: false },
			{ name: "**Senskin** - Sends a link to Sen's custom osu skin. ", value: 'Aliases: No Aliases', inline: false },
		)

		if(message.content.includes("misc")){
			message.react('730967576007671929')
			return message.author.send(miscEmbed)
		}

	if (args.length > 0){
	const imageEmbed = new MessageEmbed()
	.setColor(color)
    .setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
    .setTitle('**Image Commands**')
	//.setTitle('**Do ",setup" to use Sonar to her max potential!**')
	.setThumbnail(bot.user.displayAvatarURL())
	.setDescription(`Prefix: ${PREFIX}`)
	.addFields(
        //{ name: '**Miscellaneous**', value: ' `number`  `report`  `poll`  `8ball`  `inviteme`  `define`  `reddit`  `coinflip`  `uptime`', inline: true },
    	//{ name: '**Info**', value: '`status`  `weather`  `spotify`   `corona/covid`  `roleinfo`   `av`  `ping`  `help`  `setup`  `emoji`  `background`  `commandlist`  `changelog`  `supportserver`', inline: true },
        { name: "**Reddit** - Shows a random image from a subreddit.", value: 'Aliases: No Aliases ', inline: false },
        { name: "**avatar** - Shows a user's avatar.", value: 'Aliases: av, icon ', inline: false },
        { name: "**Tweet** - Creates your own mock twitter post.", value: 'Aliases: No Aliases', inline: false },
        { name: "**Clyde** - Discord's Clyde bot says whatever you want.", value: 'Aliases: No Aliases', inline: false },
        { name: "**Meme** - Sends a random meme from a random subreddit.", value: 'Aliases: No Aliases', inline: false },
        { name: "**Catgirl** - Sends a random anime catgirl!", value: 'Aliases: No Aliases', inline: false },
        { name: "**Kyaru** - Sends a random picture of kyaru.", value: 'Aliases: No Aliases', inline: false },
        { name: "**Arknights** - Sends a random image from the arknights subreddit!", value: 'Aliases: No Aliases', inline: false },
        { name: "**Roast** - Roasts a user.", value: 'Aliases: No Aliases', inline: false },
        { name: "**Gif** - Sends a gif based on a word.", value: 'Aliases: No Aliases', inline: false },
        { name: "**Fire** - Sends a picture of a users pfp being set on fire.", value: 'Aliases: No Aliases', inline: false },
		{ name: "**Love** - Sends a picture of a two users in love.", value: 'Aliases: No Aliases', inline: false },
	)
    
	if(message.content.includes("image")){
		message.react('730967576007671929')
		return message.author.send(imageEmbed)
	}
    }}}
	}}}}
	

