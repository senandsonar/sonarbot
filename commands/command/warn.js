const { MessageEmbed } = require("discord.js");


const mongoose = require('mongoose');
const Guild = require('../../models/guild');
const warns = require("../../models/warns");
module.exports={
        name: "warn",
        category: "moderation",
        description: "Warns a user in the guild.",
        usage: "[name | nickname | mention | ID] <reason> (optional)",
        accessableby: "Administrator",
    
    run: async (bot, message, args) => {
      if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**You Dont Have The Permissions To Warn Users! - [BAN_MEMBERS]**");
        const settings = await Guild.findOne({
          guildID: message.guild.id
        }, (err, guild) => {
          if (err) console.error(err)
        })
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
    if (!user) return message.channel.send(`You did not mention a user!`);
    if (!args.slice(1).join(" "))
      return message.channel.send(`You did not specify a reason!`);
    warns.findOne(
      { Guild: message.guild.id, User: user.id },
      async (err, data) => {
        if (err) console.log(err);
        if (!data) {
          let newWarns = new warns({
            User: user.id,
            Guild: message.guild.id,
            Warns: [
              {
                Moderator: message.author.id,
                Reason: args.slice(1).join(" "),
              },
            ],
          });
          newWarns.save();
          message.channel.send(
            `\`${user.user.tag}\` has been warned with the reason of \`${args
              .slice(1)
              .join(" ")}\`. They now have 1 warn.`
          );
        } else {
          data.Warns.unshift({
            Moderator: message.author.id,
            Reason: args.slice(1).join(" "),
          });
          data.save();
          message.channel.send(
            `\`${user.tag} has been warned with the reason of \`${args
              .slice(1)
              .join(" ")}\`. They know have \`${data.Warns.length}\` warns.`
          );
        }
      }
    );
  },
};