const { MessageEmbed } = require("discord.js");
const { PREFIX } = require("../config.json");
module.exports = {
  name: "announce",
  description: "Get the bot to say what ever you want in a specific channel.",
  usage: "<channel id> <msg>",
  run: async (bot, message, args) => {
    let rChannel = message.guild.channels.cache.get(args[0]);
    if (!rChannel)
      return message.channel.send(
        `\`\`\`Usage: ${PREFIX}announce {channel ID} {message content}\`\`\``
      );
    console.log(rChannel);
    let MSG = message.content
      .split(`${bot.prefix}announce ${rChannel.id} `)
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