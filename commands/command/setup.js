const Discord = require('discord.js');

const mongoose = require('mongoose');
const Guild = require('../../models/guild');
const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
	name: 'setup',
	description: 'help!',
	cooldown: 10,
	run: async(bot, message, args) => {
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
		//let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase()) || message.member;
	let exampleEmbed = new Discord.MessageEmbed()
	.setColor(`BLACK`)
	.setTitle(`To use ${bot.user.username} effectively, follow these instructions...`)
	.setDescription('You will need to create a few roles and a channel.')
	.addFields(
		{ name: '**Jailed Role and Jail Channel.**', value: 'Create a role called "Jailed" and a text channel called "Jail". Remove all the permissions from the Jailed role and then only allow members with the Jailed role to send messages in Jail.', inline: true },
		{ name: '**Report Channel**', value: 'Create a channels called "reports". This channel is where your user reports will appear for moderators to see. ' },
	)
	.setTimestamp()

	message.channel.send(exampleEmbed)
}}