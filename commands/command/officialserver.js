const Discord = require('discord.js');

const mongoose = require('mongoose');
const Guild = require('../../models/guild');
const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
	name: 'officialserver',
	description: 'help!',
	run: async(bot, message, args) => {
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
       	pleEmbed = new Discord.MessageEmbed()
	.setColor(`BLACK`)
    .setTitle('Click this link to join the official Sonar server!')
    .setURL('https://discord.gg/VbDchG')
	.setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
	
	.setTimestamp()

    message.channel.send(exampleEmbed)
    }}