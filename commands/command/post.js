const { MessageEmbed } = require('discord.js');

const mongoose = require('mongoose');
const Guild = require('../../models/guild');
module.exports={
    
        name: "post",
        description: "Creates a reddit style post.",
        category: "info",
        cooldown: 10,
        noalias: "None",
       
    
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
                  .setDescription(`**Invalid Operation** <:senbotcross:730967627916378174>  \n> \`\`\`Syntax: ${settings.prefix}post {post description}\n> \n> Usage: Makes a reddit-style post. \`\`\``)
                  .setTimestamp()
                return message.channel.send(sembed);
                }

        const embed = new MessageEmbed()
            .setColor(`#faf6f6`)
            .setAuthor(message.member.displayName, message.author.displayAvatarURL())
            .addField(`New Post in  ${message.channel.name} 📰 `,"*> " + (args.join('  ') + "* ")  )
        var msg = await message.channel.send(embed);
        message.delete({ timeout: 3000 });
        await msg.react('728960552558264327');
        await msg.react('728960499584204811');
  },
}

