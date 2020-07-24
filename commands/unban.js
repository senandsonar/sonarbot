const { MessageEmbed } = require("discord.js")
const Discord = require('discord.js');
const client = new Discord.Client();



module.exports = {
        name: "unban",
        description: "Unban a user from the guild!",
        usage: "[name | tag | mention | ID] <reason> (optional)",
        category: "moderation",
        accessableby: "Administrator",
        aliases: ["ub", "unbanish"],
    run: async (bot, message, args) => {

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**You Dont Have The Permissions To Unban Someone! - [BAN_MEMBERS]**")

        

        

        if (args.length == 0){
        
            const sembed = new MessageEmbed()
                .setColor(`#faf6f6`)
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**Invalid Operation** :x:  \n> \`\`\`Syntax: ,unban {member}\n> \n> Usage: Unbans a user. \`\`\``)
                .setTimestamp()
                return message.channel.send(sembed);
                }
      
        let bannedMemberInfo = await message.guild.fetchBans()

        let bannedMember;
        bannedMember = bannedMemberInfo.find(b => b.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || bannedMemberInfo.get(args[0]) || bannedMemberInfo.find(bm => bm.user.tag.toLowerCase() === args[0].toLocaleLowerCase());
       // if (!bannedMember) return message.channel.send("**Please Provide A Valid Username, Tag Or ID Or The User Is Not Banned!**")

        let reason = args.slice(1).join(" ")
        

        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("**I Don't Have Permissions To Unban Someone! - [BAN_MEMBERS]**")
        
        
              
        
        try {
            if (reason) {
                message.guild.members.unban(bannedMember.user.id, reason)
                var sembed = new MessageEmbed()
                    .setColor(`#faf6f6`)
                    .setAuthor(message.guild.name, message.guild.iconURL())
                    .setDescription(`**${bannedMember.user.tag} has been unbanned for ${reason}**`)
                message.channel.send(sembed)
            } else {
                message.guild.members.unban(bannedMember.user.id, reason)
                var sembed2 = new MessageEmbed()
                    .setColor(`#faf6f6`)
                    .setAuthor(message.guild.name, message.guild.iconURL())
                    .setDescription(`**${bannedMember.user.tag} has been unbanned. ✅ **`)
                message.channel.send(sembed2)
            }
            
        } catch {
            
        }

     
    }
}