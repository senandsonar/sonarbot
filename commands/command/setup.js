const Discord = require('discord.js');

const mongoose = require('mongoose');
const Guild = require('../../models/guild');
module.exports={
	name: 'setup',
	description: 'help!',
	cooldown: 10,
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
	.setTitle(`To use ${bot.user.username} effectively, follow these instructions...`)
	.setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
	.setDescription('You will need to create a few roles and a channel.')
	.addFields(
		{ name: '**Jailed Role and Jail Channel.**', value: 'Create a role called "Jailed" and a text channel called "Jail". Remove all the permissions from the Jailed role and then only allow members with the Jailed role to send messages in Jail.', inline: true },
		{ name: '**Report Channel**', value: 'Create a channels called "reports". This channel is where your user reports will appear for moderators to see. ' },
	)
	.setTimestamp()

	message.channel.send(exampleEmbed)
}}