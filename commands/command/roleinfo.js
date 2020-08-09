const { MessageEmbed } = require("discord.js");

const mongoose = require('mongoose');
const Guild = require('../../models/guild');
module.exports={
        name: 'roleinfo',
        category: "info",
        cooldown: 5,
        aliases: ["rinfo"],
        description: "shows stats of the mentioned role",
        usage: "[role name | role mention | ID]",
        accessableby: 'everyone',
    
    run: async (bot, message, args) => {
        const settings = await Guild.findOne({
          guildID: message.guild.id
        }, (err, guild) => {
          if (err) console.error(err)
        })
        
        if (args.length == 0){
        
            const sembed = new MessageEmbed()
                 .setColor(`#faf6f6`)
                  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                  .setDescription(`**Invalid Operation** <:senbotcross:730967627916378174>  \n> \`\`\`Syntax: ${settings.prefix}[roleinfo|rrinfo] {role name}\n> \n> Usage: Shows info of a specific role.\`\`\``)
                  .setTimestamp()
                return message.channel.send(sembed);
                }
        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());
        if (!role){
        
            const sembed = new MessageEmbed()
                 .setColor(`#faf6f6`)
                  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                  .setDescription(`**Invalid Operation** <:senbotcross:730967627916378174>  \n> \`\`\`Syntax: ${settings.prefix}[roleinfo|rrinfo] {role name}\n> \n> Usage: Shows info of a specific role.\`\`\``)
                  .setTimestamp()
                return message.channel.send(sembed);
                }
        const status = {
            false: "No",
            true: "Yes"
        }

        let roleembed = new MessageEmbed()
            .setColor(`${role.hexColor}`)
            .setAuthor("Role Info")
            .setThumbnail(message.guild.iconURL())
            .addField("**Role ID**", `\`${role.id}\``, false)
            .addField("**Name**", role.name, false)
            .addField("**Hex**", role.hexColor)
            .addField("**Members**", role.members.size)
            .addField("**Position**", role.position)
            .addField("**Mentionable**", status[role.mentionable])
            .addField(`**Users with role**`, `\`${role.members.size}\``)
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()

        message.channel.send(roleembed);
    }
}