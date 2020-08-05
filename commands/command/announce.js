const { MessageEmbed } = require("discord.js");


const mongoose = require('mongoose');
const Guild = require('../../models/guild');
module.exports={
  name: "announce",
  description: "Get the bot to say what ever you want in a specific channel.",
  usage: "<channel id> <msg>",
  run: async (bot, message, args) => {
        const settings = await Guild.findOne({
          guildID: message.guild.id
        }, (err, guild) => {
          if (err) console.error(err)
        })
    let rChannel = message.guild.channels.cache.get(args[0]);
    if (!rChannel)
      return message.channel.send(
        `\`\`\`Usage: ${settings.prefix}announce {channel ID} {message content}\`\`\``
      );
    console.log(rChannel);
    let MSG = message.content
      .split(`${settings.prefix}announce ${rChannel.id} `)
      .join("");
    if (!MSG)
      return message.channel.send(`\`\`\`You did not specify the channel ID!\`\`\``);
    const _ = new MessageEmbed()
      .setDescription(`${MSG}`)
      .setColor('#faf6f6');
    rChannel.send(_);
    message.react('730967576007671929');
  },
};