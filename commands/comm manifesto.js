const Discord = require('discord.js');
var fs = require('fs');

const path = "./manifesto.txt";
const content = fs.readFileSync(path, 'utf-8');



module.exports = {
	name: 'commanifesto',
	description: 'help!',
	execute(message, args) {
		
		let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
		let color = message.member.displayHexColor;
        if (color == '#000000') color = message.member.hoistRole.hexColor;
// inside a command, event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor(color)
    .setTitle('The Communist Manifesto')
    .setDescription(content)
    .setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
	.setTimestamp()

	message.channel.send(exampleEmbed)
}}