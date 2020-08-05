const { MessageEmbed } = require("discord.js");
const ms = require ('ms')
const mongoose = require('mongoose');
const Guild = require('../../models/guild');
module.exports={
  name: "report",
  category: "moderation",
  description: "Report a user of your choice!",
  usage: "<User mention>",
  run: async (bot, message, args) => {
        const settings = await Guild.findOne({
          guildID: message.guild.id
        }, (err, guild) => {
          if (err) console.error(err)
        })
    if (!message.member.permissions.has("SEND_MESSAGES"))
      return message.channel.send(`No.`);
    let User = message.mentions.users.first() || null;

    if (User == null) {
      return message.channel.send(`You did not mention a user!`);
    } else {
      let Reason = message.content.slice(29) || null;
      if (Reason == null) {
        return message.channel.send(
          `You did not list a reason for the report!`
        );
      }
      let Avatar = User.displayAvatarURL();
      let Channel = message.guild.channels.cache.find(
        (ch) => ch.name === "reports"
      );
      if (!Channel)
        return message.channel.send(
          `There is no channel in this server which is called \`reports\``
        );
      let Embed = new MessageEmbed()
        .setTitle(`A user has been reported.`)
        .setDescription(
          `The user \`${message.author.tag}\` has reported the user \`${User.tag}\`! `
        )
        .setColor(`RED`)
        .setThumbnail(Avatar)
        .addFields(
          { name: "Reporter's ID", value: `${message.author.id}`, inline: true },
          { name: "Reporter's Tag", value: `${message.author.tag}`, inline: true },
          { name: "Reported User's ID", value: `${User.id}`, inline: true },
          { name: "Reported User's Tag", value: `${User.tag}`, inline: true },
          { name: "Reason", value: `\`${Reason.slice(1)}\``, inline: true },
          {
            name: "Date Of Report (M/D/Y)",
            value: `${new Intl.DateTimeFormat("en-US").format(Date.now())}`,
            inline: true,
          }
        );
      Channel.send(Embed);
    }
  },
};