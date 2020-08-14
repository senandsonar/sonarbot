const { MessageEmbed } = require('discord.js');


const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
    
        name: "ban",
        aliases: ["b", "banish"],
        category: "moderation",
        description: "Bans the user",
        usage: "[name | nickname | mention | ID] <reason> (optional)",
        accessableby: "Administrator",
    

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
            maxUses: 50
          })
          const role = message.mentions.roles.first()
          try {
            if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**You Dont Have The Permissions To Ban Users! - [BAN_MEMBERS]**");
            if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("**I Dont Have The Permissions To Ban Users! - [BAN_MEMBERS]**");
            if (args.length == 0){
        
                const sembed = new MessageEmbed()
                     .setColor(`#faf6f6`)
                      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                      .setDescription(`**Invalid Operation** <:senbotcross:730967627916378174>  \n> \`\`\`Syntax: ${settings.prefix}ban {member} {reason}\n> \n> Usage: Bans a user. \`\`\``)
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
                    .setColor(`RED`)
                    .setTitle('You have been banned from a server!')
                    .setThumbnail(bot.user.displayAvatarURL())
                    .addField(`**You Have Been Banned From:**`, `> ${message.guild.name}`)
                    .addField(`**Moderator:**`, `> ${message.author.tag}`)
                    .addField(`**Reason:**`, `> ${reason || "None"}`)
                    .addField(`**Invite Link:**`, `> ${invite}\n> This invite will work if you get unbanned.`)
                    .setFooter(message.guild.name, message.guild.iconURL())
                banMember.send(sembed2).then(() =>
                message.guild.members.ban(banMember, { days: 7, reason: reason })).catch(() => null)
            } catch {
                message.guild.members.ban(banMember, { days: 7, reason: reason })
            }
            if (reason) {
                var sembed = new MessageEmbed()
                    .setColor(`#faf6f6`)
                    .setAuthor(message.guild.name, message.guild.iconURL())
                    .addFields(
                        { name: `**${banMember.user.tag} has been banned for ${reason}**`, value: '> Successfully sent ban message. <:senbotcheck:730967576007671929>' },
                    )
                message.channel.send(sembed)
            } else {
                var sembed2 = new MessageEmbed()
                .setColor(`#faf6f6`)
                .setAuthor(message.guild.name, message.guild.iconURL())
                //.setDescription(`**${banMember.user.username}** has been banned, cya never punk. <:senbotcheck:730967576007671929> `)
                .addFields(
                    { name: `**${banMember.user.tag} has been banned.**`, value: '> Successfully sent ban message. <:senbotcheck:730967576007671929>' },
                )
                message.channel.send(sembed2)
            }
            let channel = db.fetch(`modlog_${message.guild.id}`)
            if (channel == null) return;

            if (!channel) return;

            const embed = new MessageEmbed()
                .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
                .setColor("#ff0000")
                .setThumbnail(banMember.user.displayAvatarURL({ dynamic: true }))
                .setFooter(message.guild.name, message.guild.iconURL())
                .addField("**Moderation**", "ban")
                .addField("**Banned**", banMember.user.username)
                .addField("**ID**", `${banMember.id}`)
                .addField("**Banned By**", message.author.username)
                .addField("**Reason**", `${reason || "**No Reason**"}`)
                .addField("**Date**", message.createdAt.toLocaleString())
                .setTimestamp();

            var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(embed)
        } catch {
            
        }
    }
}