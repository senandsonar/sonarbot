const { MessageEmbed } = require("discord.js");
const api = require("imageapi.js");
module.exports = {
  name: "reddit",
  description: "Get a random image from a subreddit.",
  category: "fun",
  cooldown: 10,
  run: async (bot, message, args) => {
    
    let Subreddit = message.content.slice(8);
    if (!Subreddit){ 
        
      const sembed = new MessageEmbed()
           .setColor(`#faf6f6`)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`**Invalid Operation** :x:  \n> \`\`\`Syntax: ,reddit {subreddit name w/o "r/".}\n> \n> Usage: Shows a random image from a subreddit. \`\`\``)
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