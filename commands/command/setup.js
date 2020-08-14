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
       	pleEmbed = new Discord.MessageEmbed()
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