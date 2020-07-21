const { MessageEmbed } = require("discord.js");

module.exports = {
        name: "removerole",
        category: "moderation",
        aliases: ["rr"],
        description: "Removes role from the user",
        accessableby: "Administrator",
        usage: "[name | nickname | mention | ID] <role>",

    run: async (bot, message, args) => {
        let color = message.member.displayHexColor;
        if (color == '#000000') color = message.member.hoistRole.hexColor;

        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("**Your Dont Have The Permissions To Remove Role From Users! - [MANAGE_ROLES]**");

        if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("**I Dont Have The Permissions To Remove Roles From Users! - [MANAGE_ROLES]**");
        
        if (args.length == 0){
        
        const sembed = new MessageEmbed()
             .setColor(color)
             .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
             .setDescription(`**Invalid Operation** :x:  \n> \`\`\`Syntax: ,[removerole|rr] {member} {role name}\n> \n> Usage: Removes a role from a user. \`\`\``)
             .setTimestamp()
            message.channel.send(sembed);
            }  let rMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!rMember){
        
            const sembed = new MessageEmbed()
                 .setColor(color)
                  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                  .setDescription(`**Invalid Operation** :x:  \n> \`\`\`Syntax: ,[removerole|rr] {member} {role name}\n> \n> Usage: Removes a role from a user. \`\`\``)
                  .setTimestamp()
                return message.channel.send(sembed);
                }

        if (args.length == 1){
            const sembed = new MessageEmbed()
            .setColor(color)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`**Invalid Operation** :x:  \n> \`\`\`Syntax: ,[removerole|rr] {member} {role name}\n> \n> Usage: Removes a role from a user. \`\`\``)
            .setTimestamp()
           message.channel.send(sembed);
         }

        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]) || message.guild.roles.cache.find(rp => rp.name.toLowerCase() === args.slice(1).join(' ').toLocaleLowerCase());
        
        //if (!role) return message.channel.send("**Couldn't Find That Role**");

        if (rMember.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) return message.channel.send('**Cannot Remove Role From This User! - [Higher Than Me In Role Hierachy]**')
        if (message.guild.me.roles.highest.comparePositionTo(role) < 0) return message.channel.send('**Role Is Currently Higher Than Me Therefore Cannot Remove It From The User!**')
        if (role.managed) return message.channel.send("**Cannot Remove That Role From This User!**")

        if (!rMember.roles.cache.has(role.id)) return message.channel.send("**User Doesnt Have That Role!**")
        if (rMember.roles.cache.has(role.id)) await (rMember.roles.remove(role.id));

        const sembed = new MessageEmbed()
            .setColor(color)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`> The role \`${role.name}\` has been removed from ${rMember.user.username} ✅ `)
            .setTimestamp()
        message.channel.send(sembed);

        
    }
}