const warns = require("../../models/warns");
const { MessageEmbed } = require("discord.js");
const Guild = require('../../models/guild');
module.exports = {
  name: "warns",
  description: "Get a user's warns in the guild!",
  category: "moderation",
  usage: "<User mention>",
  run: async (bot, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**You Dont Have The Permissions View Warns! - [BAN_MEMBERS]**");
    const settings = await Guild.findOne({
        guildID: message.guild.id
      }, (err, guild) => {
        if (err) console.error(err)
      })
    let user = message.mentions.members.first();
    if (!user) return message.channel.send(`No user specified!`);
    warns.find(
      { Guild: message.guild.id, User: user.id },
      async (err, data) => {
        if (err) console.log(err);
        if (!data.length)
          return message.channel.send(
            `${user.user.tag} has no warns in this guild.`
          );
        let Embed = new MessageEmbed()
          .setTitle(`${user.user.tag}'s warns in ${message.guild.name}: `)
          .setDescription(
            data.map((d) => {
              return d.Warns.map(
                (w, i) =>
                  `${i} - Moderator: ${
                    message.guild.members.cache.get(w.Moderator).user.tag
                  } \nReason: \`${w.Reason}\``
              ).join("\n");
            })
          );
        message.channel.send(Embed);
      }
    );
  },
};