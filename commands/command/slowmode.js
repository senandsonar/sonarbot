const { MessageEmbed } = require('discord.js');

const mongoose = require('mongoose');
const Guild = require('../../models/guild');
module.exports={
    name: "slowmode",
    category:"utility",
    aliases: ['sm', 'smode'],
    description:"Set the slowmode for the channel!",
    run: async (bot, message, args) => {
        const settings = await Guild.findOne({
          guildID: message.guild.id
        }, (err, guild) => {
          if (err) console.error(err)
        })
        
        if(!message.member.hasPermission("ADMINISTRATOR"))return message.channel.send("\`\`\`You dont have the permission - ADMINISTRATOR\`\`\`")
        if(!args[0]){ 
        
            const sembed = new MessageEmbed()
                 .setColor(`#faf6f6`)
                  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                  .setDescription(`**Invalid Operation** <:senbotcross:730967627916378174>  \n> \`\`\`Syntax: ${settings.prefix}[slowmode|sm|smode] {slowmode interval(seconds)} {reason}\n> \n> Usage: Sets a channels slowmode.\`\`\``)
                  .setTimestamp()
                return message.channel.send(sembed);
                }
        
        if(isNaN(args[0]))return message.channel.send(`That is not a number!`)
        let reason = message.content.slice(12)
     if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("\`\`\`I dont have permission to set a channels slowmode. I require the permissions MANAGE_CHANNELS.\`\`\`")
        if(!reason){ 
        
          const sembed = new MessageEmbed()
          .setColor(`#faf6f6`)
           .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
           .setDescription(`**Invalid Operation** <:senbotcross:730967627916378174>  \n> \`\`\`Syntax: ${settings.prefix}[slowmode|sm|smode] {slowmode interval(seconds)} {reason}\n> \n> Usage: Sets a channels slowmode.\`\`\``)
           .setTimestamp()
         return message.channel.send(sembed);
         }
        
        message.channel.setRateLimitPerUser(args[0],reason)
        //message.channel.send(`Set the slowmode of this channel to **${args[0]}** with the reason: **${reason}**`)
        const sembed = new MessageEmbed()
                 .setColor(`#faf6f6`)
                  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                  .addField(`Slowmode Set! <:senbotcheck:730967576007671929>`, `> Set the slowmode of this channel to **${args[0]}** for: **${reason}**`)
                  .setTimestamp()
                return message.channel.send(sembed);
                }
    }
