const { MessageEmbed } = require("discord.js");
const api = require("imageapi.js");
module.exports = {
  name: "reddit",
  description: "Get a meme from a subreddit of your choice!",
  category: "fun",
  usage: "<subreddit>",
  run: async (bot, message, args) => {
    let color = message.member.displayHexColor;
    if (color == '#000000') color = message.member.hoistRole.hexColor;
    let Subreddit = message.content.slice(8);
    if (!Subreddit){ 
        
      const sembed = new MessageEmbed()
           .setColor(color)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`**Invalid Operation** :x:  \n\`\`\`Syntax: ,reddit {subreddit name w/o "r/".} {reason}\n\nUsage: Shows a random image from a subreddit. \`\`\``)
            .setTimestamp()
          return message.channel.send(sembed);
          }
    try {
      let img = await api(Subreddit);
      const Embed = new MessageEmbed()
        .setTitle(`A random image from r/${Subreddit}`)
        .setColor(color)
        .setImage(img)
        .setURL(`https://reddit.com/r/${Subreddit}`);
      message.channel.send(Embed);
    } catch (err) {
      message.channel.send(err);
    }
  },
};