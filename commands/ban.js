const { MessageEmbed } = require('discord.js');

module.exports = {
        name: "ban",
        category: "moderation",
        description: "Bans the user",
        usage: "[name | nickname | mention | ID] <reason> (optional)",
        accessableby: "Administrator",

    run: async (bot, message, args) => {
        let color = message.member.displayHexColor;
        if (color == '#000000') color = message.member.hoistRole.hexColor;

        try {
            if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**You Dont Have The Permissions To Ban Users! - [BAN_MEMBERS]**");
            if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("**I Dont Have The Permissions To Ban Users! - [BAN_MEMBERS]**");
            if (args.length == 0){
        
                const sembed = new MessageEmbed()
                     .setColor(color)
                      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                      .setDescription(`**Invalid Operation** :x:  \n> \`\`\`Syntax: ,ban {member} {reason}\n> \n> Usage: Bans a user. \`\`\``)
                      .setTimestamp()
                    return message.channel.send(sembed);
                    }

            let banMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
            if (!banMember) return message.channel.send("**User Is Not In The Guild**");
            if (banMember === message.member) return message.channel.send("**You Cannot Ban Yourself**")
            var reason = args.slice(1).join(" ");

            if (!banMember.bannable) return message.channel.send("**Cant Kick That User**")

            try {
                const sembed2 = new MessageEmbed()
                    .setColor(color)
                    .setDescription(`**Hello, You Have Been Banned From ${message.guild.name} for: ${reason || "*No Reason.*"}**`)
                    .setFooter(message.guild.name, message.guild.iconURL())
                banMember.send(sembed2).then(() =>
                message.guild.members.ban(banMember, { days: 7, reason: reason })).catch(() => null)
            } catch {
                message.guild.members.ban(banMember, { days: 7, reason: reason })
            }
            if (reason) {
                var sembed = new MessageEmbed()
                    .setColor(color)
                    .setAuthor(message.guild.name, message.guild.iconURL())
                    .addFields(
                        { name: `**${banMember.user.tag} has been banned for ${reason}**`, value: '> Successfully sent ban message. ✅' },
                    )
                message.channel.send(sembed)
            } else {
                var sembed2 = new MessageEmbed()
                .setColor(color)
                .setAuthor(message.guild.name, message.guild.iconURL())
                //.setDescription(`**${banMember.user.username}** has been banned, cya never punk. ✅ `)
                .addFields(
                    { name: `**${banMember.user.tag} has been banned.**`, value: '> Successfully sent ban message. ✅' },
                )
                message.channel.send(sembed2)
            }
        } catch (e) {
            return message.channel.send(`**${e.message}**`)
        }
    }
};