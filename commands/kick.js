const { MessageEmbed } = require("discord.js");

module.exports = {
        name: "kick",
        category: "moderation",
        description: "Kicks the user",
        accessableby: "Administrator",
        usage: "[name | nickname | mention | ID] <reason> (optional)",
        aliases: ["k"],

    run: async (bot, message, args) => {
        let color = message.member.displayHexColor;
        if (color == '#000000') color = message.member.hoistRole.hexColor;
        try {
            if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("**You Do Not Have Permissions To Kick Members! - [KICK_MEMBERS]**");
            if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send("**I Do Not Have Permissions To Kick Members! - [KICK_MEMBERS]**");

            if (args.length == 0){
        
                const sembed = new MessageEmbed()
                     .setColor(color)
                      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                      .setDescription(`**Invalid Operation** :x:  \n\`\`\`Syntax: ,kick {member} {reason}\n\nUsage: Kicks a user. \`\`\``)
                      .setTimestamp()
                    return message.channel.send(sembed);
                    }

            var kickMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
            if (!kickMember) return message.channel.send("**User Is Not In The Guild!**");

            if (kickMember.id === message.member.id) return message.channel.send("**You Cannot Kick Yourself!**")

            if (!kickMember.kickable) return message.channel.send("**Cannot Kick This User!**")
            if (kickMember.user.bot) return message.channel.send("**Cannot Kick A Bot!**")

            var reason = args.slice(1).join(" ");
            try {
                const sembed2 = new MessageEmbed()
                    .setColor(color)
                    .setDescription(`**Hello, You Have Been Kicked From ${message.guild.name} for: ${reason || "No Reason!"}**`)
                    .setFooter(message.guild.name, message.guild.iconURL())
                kickMember.send(sembed2).then(() =>
                    kickMember.kick()).catch(() => null)
            } catch {
                kickMember.kick()
            }
            if (reason) {
            var sembed = new MessageEmbed()
                .setColor(color)
                .setAuthor(message.guild.name, message.guild.iconURL())
               // .setDescription(`**${kickMember.user.tag}** has been kicked for ${reason}`)
               .addFields(
                { name: `**${kickMember.user.tag} has been kicked for ${reason}**`, value: '> Successfully sent kick message. ✅' },
            )
            message.channel.send(sembed);
            } else {
                var sembed2 = new MessageEmbed()
                .setColor(color)
                .setAuthor(message.guild.name, message.guild.iconURL())
                .addFields(
                    { name: `**${kickMember.user.tag} has been kicked.**`, value: '> Successfully sent kick message. ✅' },
                )
            message.channel.send(sembed2);
            }
           
        } catch (e) {
            return message.channel.send(`**${e.message}**`)
        }
    }
}