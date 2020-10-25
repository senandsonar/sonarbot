const { MessageEmbed } = require("discord.js");

const { PREFIX } = require('../../configg');

const db = require('quick.db');
module.exports = {
   
            name: "kick",
        category: "moderation",
        description: "Kicks a user from the server.",
        accessableby: "Administrator",
        usage: "[name | nickname | mention | ID] <reason> (optional)",

    run: async(bot, message, args) => {
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
        let invite = await message.channel.createInvite({
            maxAge: 86400,
            maxUses: 1
          })
        
        try {
            if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("\`\`\`You Do Not Have Permissions To Kick Members! - [KICK_MEMBERS]\`\`\`");
            if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send("\`\`\`I Do Not Have Permissions To Kick Members! - [KICK_MEMBERS]\`\`\`");

            if (args.length == 0){
        
                const sembed = new MessageEmbed()
                     .setColor(`BLACK`)
                      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                      .setDescription(`**Invalid Operation** <:senbotcross:730967627916378174>  \n> \`\`\`Syntax: ${prefix}kick {member} {reason}\n> \n> Usage: Kicks a user. \`\`\``)
                      .setTimestamp()
                    return message.channel.send(sembed);
                    }

                    var kickMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
            if (!kickMember) return message.channel.send("\`\`\`User Is Not In The Guild!\`\`\`");

            if (kickMember.id === message.member.id) return message.channel.send("\`\`\`You Cannot Kick Yourself!\`\`\`")

            if (!kickMember.kickable) return message.channel.send("\`\`\`Cannot Kick This User!\`\`\`")
            if (kickMember.user.bot) return message.channel.send("\`\`\`Cannot Kick A Bot!\`\`\`")

            var reason = args.slice(1).join(" ");
            try {
                const sembed2 = new MessageEmbed()
                    .setColor(`RED`)
                    .setTitle('You have been kicked from a server!')
                    .setThumbnail(bot.user.displayAvatarURL())
                    .addField(`**You Have Been Kicked From:**`, `> ${message.guild.name}`)
                    .addField(`**Moderator:**`, `> ${message.author.tag}`)
                    .addField(`**Reason:**`, `> ${reason || "None"}`)
                    .addField(`**Invite Link:**`, `> ${invite}`)
                    .setFooter(message.guild.name, message.guild.iconURL())
                kickMember.send(sembed2).then(() =>
                    kickMember.kick()).catch(() => null)
            } catch {
                kickMember.kick()
            }
            if (reason) {
            var sembed = new MessageEmbed()
                .setColor(`BLACK`)
                .setAuthor(message.guild.name, message.guild.iconURL())
               // .setDescription(`**${kickMember.user.tag}** has been kicked for ${reason}`)
               .addFields(
                { name: `**${kickMember.user.tag} has been kicked for ${reason}**`, value: '> Attempted to send kick message. <:senbotcheck:730967576007671929>' },
            )
                .addField(`Ban Assigned By:`, `> ${message.author}`)
            message.channel.send(sembed);
            } else {
                var sembed2 = new MessageEmbed()
                .setColor(`BLACK`)
                .setAuthor(message.guild.name, message.guild.iconURL())
                .addFields(
                    { name: `**${kickMember.user.tag} has been kicked.**`, value: '> Attempted to send kick message. <:senbotcheck:730967576007671929>' },
                )
                .addField(`Kick Assigned By:`, `> ${message.author}`)
            message.channel.send(sembed2);
            }
            let channel = db.fetch(`modlog_${message.guild.id}`)
            if (!channel) return;

            const embed = new MessageEmbed()
                .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
                .setColor("#ff0000")
                .setThumbnail(kickMember.user.displayAvatarURL({ dynamic: true }))
                .setFooter(message.guild.name, message.guild.iconURL())
                .addField("**Moderation**", "kick")
                .addField("**User Kicked**", kickMember.user.username)
                .addField("**Kicked By**", message.author.username)
                .addField("**Reason**", `${reason || "**No Reason**"}`)
                .addField("**Date**", message.createdAt.toLocaleString())
                .setTimestamp();

            var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(embed)
        } catch (e) {
            return message.channel.send(`**${e.message}**`)

        
        }
    }
}