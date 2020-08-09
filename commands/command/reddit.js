const { MessageEmbed } = require("discord.js");
const api = require("imageapi.js");
const mongoose = require('mongoose');
const Guild = require('../../models/guild');
module.exports={
  name: "reddit",
  description: "Get a random image from a subreddit.",
  category: "fun",
  cooldown: 10,
  run: async (bot, message, args) => {
        const settings = await Guild.findOne({
          guildID: message.guild.id
        }, (err, guild) => {
          if (err) console.error(err)
        })
    
    let Subreddit = message.content.slice(8);
    if (!Subreddit){ 
        
      const sembed = new MessageEmbed()
           .setColor(`#faf6f6`)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`**Invalid Operation** <:senbotcross:730967627916378174>  \n> \`\`\`Syntax: ${settings.prefix}reddit {subreddit name w/o "r/".}\n> \n> Usage: Shows a random image from a subreddit. \`\`\``)
            .setTimestamp()
          return message.channel.send(sembed);
          }
    try {
      let img = await api(Subreddit);
      const Embed = new MessageEmbed()
        .setTitle(`r/${Subreddit}`)
        .setColor(`#faf6f6`)
        .setImage(img)
        .setTimestamp()
        .setURL(`https://reddit.com/r/${Subreddit}`);
        var msg = await message.channel.send(Embed);
      await msg.react('728960552558264327');
      await msg.react('728960499584204811');

    }
  finally{}},
};