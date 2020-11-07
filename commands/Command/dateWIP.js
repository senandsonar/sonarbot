const { MessageEmbed } = require("discord.js");
const moment = require("moment")
const moments = require("moment-timezone")
const mongoose = require('mongoose');
const Guild = require('../../models/guild');
const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
  name: "date",
  description: "List your current date.",
  usage: "date",
  run: async(bot, message, args) => {
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
        const sembed = new MessageEmbed()
        .setColor(`BLACK`)
         .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
         .setDescription(moments())
         .setTimestamp()
       return message.channel.send(sembed);
       }}