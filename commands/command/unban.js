const { MessageEmbed } = require("discord.js")
const Discord = require('discord.js');
const client = new Discord.Client();




const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
   
            name: "unban",
        description: "Unban a user from the guild!",
        usage: "[name | tag | mention | ID] <reason> (optional)",
        category: "moderation",
        accessableby: "Administrator",
        aliases: ["ub", "unbanish"],
    run: async(bot, message, args) => {
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
        

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("\`\`\`You Dont Have The Permissions To Unban Someone! - [BAN_MEMBERS]\`\`\`")

        

        

        if (args.length == 0){
        
            const sembed = new MessageEmbed()
                .setColor(`BLACK`)
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**Invalid Operation** <:senbotcross:730967627916378174>  \n> \`\`\`Syntax: ${prefix}unban {member}\n> \n> Usage: Unbans a user. \`\`\``)
                .setTimestamp()
                return message.channel.send(sembed);
                }
      PREFIX
        let bannedMemberInfo = await message.guild.fetchBans()

        let bannedMember;
        bannedMember = bannedMemberInfo.find(b => b.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || bannedMemberInfo.get(args[0]) || bannedMemberInfo.find(bm => bm.user.tag.toLowerCase() === args[0].toLocaleLowerCase());
       // if (!bannedMember) return message.channel.send("**Please Provide A Valid Username, Tag Or ID Or The User Is Not Banned!**")

        let reason = args.slice(1).join(" ")
        

        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("\`\`\`I Don't Have Permissions To Unban Someone! - [BAN_MEMBERS]\`\`\`")
        
        
              
        
        try {
            if (reason) {
                message.guild.members.unban(bannedMember.user.id, reason)
                var sembed = new MessageEmbed()
                    .setColor(`BLACK`)
                    .setAuthor(message.guild.name, message.guild.iconURL())
                    .setDescription(`**${bannedMember.user.tag} has been unbanned for ${reason}**`)
                    .addField(`Ban Removed By:`, `> ${message.author}`)
                message.channel.send(sembed)
            } else {
                message.guild.members.unban(bannedMember.user.id, reason)
                var sembed2 = new MessageEmbed()
                    .setColor(`BLACK`)
                    .setAuthor(message.guild.name, message.guild.iconURL())
                    .setDescription(`**${bannedMember.user.tag} has been unbanned. <:senbotcheck:730967576007671929> **`)
                    .addField(`Ban Removed By:`, `> ${message.author}`)
                message.channel.send(sembed2)
            }
            
            let channel = db.fetch(`modlog_${message.guild.id}`)
        if (!channel) return;

        let embed = new MessageEmbed()
            .setColor("#ff0000")
            .setThumbnail(bannedMember.user.displayAvatarURL({ dynamic: true }))
            .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
            .addField("**Moderation**", "unban")
            .addField("**Unbanned**", `${bannedMember.user.username}`)
            .addField("**ID**", `${bannedMember.user.id}`)
            .addField("**Moderator**", message.author.username)
            .addField("**Reason**", `${reason}` || "**No Reason**")
            .addField("**Date**", message.createdAt.toLocaleString())
            .setFooter(message.guild.name, message.guild.iconURL())
            .setTimestamp();

        var sChannel = message.guild.channels.cache.get(channel)
        if (!sChannel) return;
        sChannel.send(embed)
        } catch {
            
        }

     
    }
}