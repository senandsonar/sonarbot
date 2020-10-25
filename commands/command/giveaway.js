const { MessageEmbed } = require("discord.js");
const ms = require("ms");

     
     
const mongoose = require('mongoose');
const Guild = require('../../models/guild');
const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
  name: "giveaway",
  description: "Create a simple giveaway",
  usage: "<time> <channel> <prize>",
  category: "fun",
  run: async(bot, message, args) => {
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
        
    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.channel.send(
      `You do not have administrator! ${message.author}`
    );

    
    const sembed = new MessageEmbed()
        .setColor(`BLACK`)
       .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
       .setDescription(`**Invalid Operation** <:senbotcross:730967627916378174>  \n> \`\`\`Syntax: ${prefix}giveaway {#channel} {time} {prize}\n> \n> Usage: Starts a giveaway.\n> \n> Note: The format for time is m(Minutes), h(Hours), d(days).\n> \n> Example: ,giveaway #general 5m nitro.\`\`\``)
       .setTimestamp()
    
    if (!args[0]) return message.channel.send(sembed);
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m")
    )
      return message.channel.send(sembed);
    if (isNaN(args[0][0])) return message.channel.send(`That is not a number!`);
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(
        `I could not find that channel in the guild!`
      );
    let prize = args.slice(2).join(" ");
    if (!prize) return message.channel.send(sembed);
    message.channel.send(`*Giveaway created in ${channel}*`);
    let Embed = new MessageEmbed()
      .setTitle(`New giveaway!`)
      .setDescription(
        `The user ${message.author} is hosting a giveaway for: **${prize}**`
      )
      .setTimestamp(Date.now() + ms(args[0]))
      .setColor(`BLACK`);
    let m = await channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        message.channel.send(`Reactions: ${m.reactions.cache.get("🎉").count}`);
        return message.channel.send(
          `Not enough people in the giveaway to pick a winner.`
        );
      }
      
      let winner = m.reactions.cache
        .get("🎉")
        .users.cache.filter((u) => !u.bot)
        .random();
        const endembed = new MessageEmbed()
        .setColor(`BLACK`)
        .setTitle(`Giveaway Ended!`)
       .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
       .setDescription(`The winner of the giveaway for **${prize}** is: ${winner}`)
       .setTimestamp()
       message.channel.send(endembed)
    }, ms(args[0]));
  },
};