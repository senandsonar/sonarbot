const { MessageEmbed } = require("discord.js");


const mongoose = require('mongoose');
const Guild = require('../../models/guild');
const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
  name: "announce",
  description: "Get the bot to say what ever you want in a specific channel.",
  usage: "<channel id> <msg>",
  run: async(bot, message, args) => {
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
        
    let rChannel = message.guild.channels.cache.get(args[0]);
    if (!rChannel)
      return message.channel.send(
        `\`\`\`Usage: ${prefix}announce {channel ID} {message content}\`\`\``
      );
    console.log(rChannel);
    let MSG = message.content
      .split(`${prefix}announce ${rChannel.id} `)
      .join("");
    if (!MSG)
      return message.channel.send(`\`\`\`You did not specify the channel ID!\`\`\``);
    const _ = new MessageEmbed()
      .setDescription(`${MSG}`)
      .setColor('BLACK');
    rChannel.send(_);
    message.react('730967576007671929');
  },
};