const Discord = require('discord.js');

const mongoose = require('mongoose');
const Guild = require('../../models/guild');
module.exports={
	name: 'changelog',
    description: 'help!',
    aliases: ["changes", "cl"],
	run: async (bot, message, args) => {
        const settings = await Guild.findOne({
          guildID: message.guild.id
        }, (err, guild) => {
          if (err) console.error(err)
        })  		
		let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
		
// inside a command, event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor(`#faf6f6`)
    .setTitle('7/24/2020')
    .setDescription("Don't forget the check the Command List for info on new commands!")
	.setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
	.setThumbnail (`https://i.imgur.com/h1ekMX8.png`)
	.addFields(
		{ name: '**Added A Few Commands.**', value: "Added 'commandinfo', 'giveaway', 'role' commands. "},
		
	)
	.setTimestamp()

	message.channel.send(exampleEmbed)
}}