const { MessageEmbed } = require('discord.js');

module.exports = {
        name: "setnick",
        aliases: ["snick"],
        category: "moderation",
        description: "Sets Or Changes Nickname Of An User",
        usage: "[mention | name | nickname | ID] <nickname>",
        accessableby: "everyone",

    run: async (bot, message, args) => {

        
        if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("**You Dont Have Permissions To Change Nickname! - [MANAGE_GUILD]**");
        if (!message.guild.me.hasPermission("CHANGE_NICKNAME")) return message.channel.send("**I Dont Have Permissions To Change Nickname! - [CHANGE_NICKNAME]**");
        const sembed = new MessageEmbed()
        switch (args.length) {
            case 0:
                sembed
                .setColor(`#faf6f6`)
                 .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                 .setDescription(`**Invalid Operation** :x:  \n> \`\`\`Syntax: ,[setnick|snick] {user} {new nickname}\n> \n> Usage: Changes a users nickname. \`\`\``)
                 .setTimestamp()
               return message.channel.send(sembed);
               break;
            case 1:
                sembed
                .setColor(`#faf6f6`)
                 .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                 .setDescription(`**Invalid Operation** :x:  \n> \`\`\`Syntax: ,[setnick|snick] {user} {new nickname}\n> \n> Usage: Changes a users nickname. \`\`\``)
                 .setTimestamp()
               return message.channel.send(sembed);
               break;
            default:
                break;
        }
       

        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase()) || message.member;
        if (member.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) return message.channel.send('**Cannot Set or Change Nickname Of This User!**')
        let nick = args.slice(1).join(' ');

        try {
        member.setNickname(nick)
        const embed = new MessageEmbed()
            .setColor(`#faf6f6`)
            .setDescription(`> **Changed Nickname of \`${member.displayName}\` to \`${nick}\`**`)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
        message.channel.send(embed)
        } catch {
            return message.channel.send("**Missing Permissions - [CHANGE_NICKNAME]")
        }
        

        
    }
}