const Discord = require('discord.js');

const mongoose = require('mongoose');
const Guild = require('../../models/guild');
const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
	name: 'senskin',
	description: 'Creates an instant invite',
	run: async(bot, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
  
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
       	exampleEmbed = new Discord.MessageEmbed()
	.setColor(`BLACK`)
    .setTitle(`Sen's Osu Skin`)
    .setURL('https://wi.to/9f1a1d27042e1d13')
	.setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
	

    message.channel.send(exampleEmbed)
	}}

