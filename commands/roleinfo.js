const { MessageEmbed } = require("discord.js");

module.exports={
        name: 'roleinfo',
        category: "info",
        aliases: ["rinfo"],
        description: "shows stats of the mentioned role",
        usage: "[role name | role mention | ID]",
        accessableby: 'everyone',
    
    run: async (bot, message, args) => {
        let color = message.member.displayHexColor;
        if (color == '#000000') color = message.member.hoistRole.hexColor;
        if (args.length == 0){
        
            const sembed = new MessageEmbed()
                 .setColor(color)
                  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                  .setDescription(`**Invalid Operation** :x:  \n\`\`\`Syntax: ,roleinfo {role name} {reason}\n\nUsage: Shows info of a specific role. \`\`\``)
                  .setTimestamp()
                return message.channel.send(sembed);
                }
        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());
        if (!role){
        
            const sembed = new MessageEmbed()
                 .setColor(color)
                  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                  .setDescription(`**Invalid Operation** :x:  \n\`\`\`Syntax: ,roleinfo {role name} {reason}\n\nUsage: Shows info of a specific role. \`\`\``)
                  .setTimestamp()
                return message.channel.send(sembed);
                }

        const status = {
            false: "No",
            true: "Yes"
        }

        let roleembed = new MessageEmbed()
            .setColor(color)
            .setAuthor("Role Info")
            .setThumbnail(message.guild.iconURL())
            .addField("**Role ID**", `\`${role.id}\``, true)
            .addField("**Name**", role.name, true)
            .addField("**Hex**", role.hexColor)
            .addField("**Members**", role.members.size)
            .addField("**Position**", role.position)
            .addField("**Mentionable**", status[role.mentionable])
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()

        message.channel.send(roleembed);
    }
}