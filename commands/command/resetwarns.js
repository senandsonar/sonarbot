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
        let user = message.mentions.users.first();
    if (!user) return message.channel.send(`You did not mention a user!`);
    warns.findOneAndDelete(
      { Guild: message.guild.id, User: user.id },
      message.channel.send(`This user's warns have successfully been removed.`),
      async (err, data) => {
        if (err) console.log(err);
      })}}