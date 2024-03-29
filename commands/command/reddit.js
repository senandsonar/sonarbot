const { MessageEmbed } = require("discord.js");
const api = require("imageapi.js");

const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
   
      name: "reddit",
  description: "Get a random image from a subreddit.",
  category: "fun",
  cooldown: 10,
  run: async(bot, message, args) => {
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
        
    
    let Subreddit = message.content.slice(8);
    if (!Subreddit){ 
        
      const sembed = new MessageEmbed()
           .setColor(`BLACK`)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`**Invalid Operation** <:senbotcross:730967627916378174>  \n> \`\`\`Syntax: ${prefix}reddit {subreddit name w/o "r/".}\n> \n> Usage: Shows a random image from a subreddit. \`\`\``)
            .setTimestamp()
          return message.channel.send(sembed);
          }
    try {PREFIX
      let img = await api(Subreddit);
      const Embed = new MessageEmbed()
        .setTitle(`r/${Subreddit}`)
        .setColor(`BLACK`)
        .setImage(img)
        .setTimestamp()
        .setURL(`https://reddit.com/r/${Subreddit}`);
        var msg = await message.channel.send(Embed);
      await msg.react('728960552558264327');
      await msg.react('728960499584204811');

    }
  finally{}},
};