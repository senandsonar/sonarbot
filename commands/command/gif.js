const { MessageEmbed } = require('discord.js');
const { giphy_API } = require('../../configg')
const giphy = require('giphy-api')(giphy_API);


const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
   
            name: 'gif',
             description: 'Generates a gif based on a word.',
        accessableby: "everyone",
    
    run: async(bot, message, args) => {
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
        
        if (!args[0]) {
        
            const sembed = new MessageEmbed()
                 .setColor(`#faf6f6`)
                  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                  .setDescription(`**Invalid Operation** <:senbotcross:730967627916378174>   \n> \`\`\`Syntax: ${prefix}[gif|gifsearch] {word}\n> \n> Usage: Shows a gif based on a word. \`\`\``)
                  .setTimestamp()
                return message.channel.send(sembed);
            }

      try {
        giphy.search(args.join(' ')).then(function (res) {PREFIX
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