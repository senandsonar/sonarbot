const { MessageEmbed } = require('discord.js');

const mongoose = require('mongoose');
const Guild = require('../../models/guild');
module.exports={
    
        name: "poll",
        description: "polling",
        category: "info",
        cooldown: 8,
        noalias: "None",
        accessableby: "Administrator",
    
    run: async (bot, message, args) => {
        const settings = await Guild.findOne({
          guildID: message.guild.id
        }, (err, guild) => {
          if (err) console.error(err)
        })
        if (!message.member.hasPermission('SEND_MESSAGES')) return message.channel.send("\`\`\`You Do Not Have Sufficient Permissions! - [SEND_MESSAGES]\`\`\`");
        
        if (args.length == 0){ 
        
            const sembed = new MessageEmbed()
                 .setColor(`#faf6f6`)
                  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                  .setDescription(`**Invalid Operation** :x:  \n> \`\`\`Syntax: ${settings.prefix}poll {query}\n> \n> Usage: Starts a poll. \`\`\``)
                  .setTimestamp()
                return message.channel.send(sembed);
                }
            

        const embed = new MessageEmbed()
            .setColor(`#faf6f6`)
            .setAuthor(message.member.displayName, message.author.displayAvatarURL())
            .addField(`Poll started in  ${message.channel.name} 📊 `,"*> " + (args.join('  ') + "* ")  )
        var msg = await message.channel.send(embed);
        message.delete({ timeout: 3000 });

        await msg.react('730967576007671929');
        await msg.react('730967627916378174');

        
    }
}