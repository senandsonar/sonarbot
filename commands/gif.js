const { MessageEmbed } = require('discord.js');
const { giphy_API } = require('../config.json');
const giphy = require('giphy-api')(giphy_API);

module.exports = {
        name: 'gif',
        category: 'image',
        description: 'Provide a query and I will return a gif!',
        usage: "[query]",
        aliases: ['gifsearch'],
        accessableby: "everyone",
    
    run: async (bot, message, args) => {
        let emcolor = message.member.displayHexColor;
        if (emcolor == '#000000') color = message.member.hoistRole.hexColor;
        if (!args[0]) {
        
            const sembed = new MessageEmbed()
                 .setColor(emcolor)
                  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                  .setDescription(`**Invalid Operation** :x:   \n> \`\`\`Syntax: ,[gif|gifsearch] {word}\n> \n> Usage: Shows a gif based on a word. \`\`\``)
                  .setTimestamp()
                return message.channel.send(sembed);
            }

      try {
        giphy.search(args.join(' ')).then(function (res) {
            let id = res.data[0].id;
            let url = `https://media.giphy.com/media/${id}/giphy.gif`;
            const embed = {
                color: emcolor,
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