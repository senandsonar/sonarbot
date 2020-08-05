const { MessageEmbed } = require("discord.js");


const mongoose = require('mongoose');
const Guild = require('../../models/guild');
const warns = require("../../models/warns");
module.exports={
        name: "resetwarns",
        category: "moderation",
        description: "Warns a user in the guild.",
        usage: "[name | nickname | mention | ID] <reason> (optional)",
        accessableby: "Administrator",
    
    run: async (bot, message, args) => {
        const settings = await Guild.findOne({
          guildID: message.guild.id
        }, (err, guild) => {
          if (err) console.error(err)
        })
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
    if (!user) return message.channel.send(`You did not mention a user!`);
    warns.findOneAndDelete(
      { Guild: message.guild.id, User: user.id },
      message.react(`730967576007671929`),
      async (err, data) => {
        if (err) console.log(err);
      })}}