const { MessageEmbed } = require("discord.js")


module.exports = {
        name: "unban",
        description: "Unban a user from the guild!",
        usage: "[name | tag | mention | ID] <reason> (optional)",
        category: "moderation",
        accessableby: "Administrator",
        aliases: ["ub", "unbanish"],
    run: async (bot, message, args) => {

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**You Dont Have The Permissions To Unban Someone! - [BAN_MEMBERS]**")

        

        if (!args[0]) return message.channel.send("**Please Enter A Name!**")
      
        let bannedMemberInfo = await message.guild.fetchBans()

        let bannedMember;
        bannedMember = bannedMemberInfo.find(b => b.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || bannedMemberInfo.get(args[0]) || bannedMemberInfo.find(bm => bm.user.tag.toLowerCase() === args[0].toLocaleLowerCase());
        if (!bannedMember) return message.channel.send("**Please Provide A Valid Username, Tag Or ID Or The User Is Not Banned!**")

        let reason = args.slice(1).join(" ")
        

        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("**I Don't Have Permissions To Unban Someone! - [BAN_MEMBERS]**")
        try {
            bannedMember.send(`**Hello, You Have Been Unbanned From ${message.guild.name} **`).then(() =>
                message.guild.members.ban(bannedMember, { days: 7, reason: reason })).catch(() => null)
            } catch {
                message.guild.members.ban(bannedMember, { days: 7, reason: reason })
            }
        
        try {
            if (reason) {
                message.guild.members.unban(bannedMember.user.id, reason)
                var sembed = new MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor(message.guild.name, message.guild.iconURL())
                    .setDescription(`**${bannedMember.user.tag} has been unbanned for ${reason}**`)
                message.channel.send(sembed)
            } else {
                message.guild.members.unban(bannedMember.user.id, reason)
                var sembed2 = new MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor(message.guild.name, message.guild.iconURL())
                    .setDescription(`**${bannedMember.user.tag} has been unbanned. ✅ **`)
                message.channel.send(sembed2)
            }
            
        } catch {
            
        }

     
    }
}