const { MessageEmbed } = require('discord.js');
const { giphy_API } = require('../../config.json');
const giphy = require('giphy-api')(giphy_API);

const mongoose = require('mongoose');
const Guild = require('../../models/guild');
module.exports={
        name: 'gif',
        category: 'image',
        description: 'Generates a gif based on a word.',
        accessableby: "everyone",
    
    run: async (bot, message, args) => {
        const settings = await Guild.findOne({
          guildID: message.guild.id
        }, (err, guild) => {
          if (err) console.error(err)
        })
        
        if (!args[0]) {
        
            const sembed = new MessageEmbed()
                 .setColor(`#faf6f6`)
                  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                  .setDescription(`**Invalid Operation** :x:   \n> \`\`\`Syntax: ${settings.prefix}[gif|gifsearch] {word}\n> \n> Usage: Shows a gif based on a word. \`\`\``)
                  .setTimestamp()
                return message.channel.send(sembed);
            }

      try {
        giphy.search(args.join(' ')).then(function (res) {
            let id = res.data[0].id;
            let url = `https://media.giphy.com/media/${id}/giphy.gif`;
            const embed = {
                color: `#faf6f6`,
                timestamp: new Date(),
                footer: {
                    text: message.guild.name,
                    icon_url: message.guild.iconURL()
                  },
                  image: {
                      url: url
                  }
            };
            message.channel.send({ embed });
        });
      } catch {
          return message.channel.send("**Not Found!**")
      }
    }
};