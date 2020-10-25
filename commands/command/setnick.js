const { MessageEmbed } = require('discord.js');



const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
   
            name: "setnick",
        aliases: ["snick"],
        category: "moderation",
        description: "Sets Or Changes Nickname Of An User",
        usage: "[mention | name | nickname | ID] <nickname>",
        accessableby: "everyone",

    run: async(bot, message, args) => {
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
        

        
        if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("\`\`\`You Dont Have Permissions To Change Nicknames! - [MANAGE_GUILD]\`\`\`");
        if (!message.guild.me.hasPermission("CHANGE_NICKNAME")) return message.channel.send("\`\`\`I Dont Have Permissions To Change Nicknames! - [CHANGE_NICKNAME]\`\`\`");
        const sembed = new MessageEmbed()
        switch (args.length) {
            case 0:
                sembed
                .setColor(`BLACK`)
                 .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                 .setDescription(`**Invalid Operation** <:senbotcross:730967627916378174>  \n> \`\`\`Syntax: ${prefix}[setnick|snick] {user} {new nickname}\n> \n> Usage: Changes a users nickname. \`\`\``)
                 .setTimestamp()
               return message.channel.send(sembed);
               break;
            case 1:PREFIX
                sembed
                .setColor(`BLACK`)
                 .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                 .setDescription(`**Invalid Operation** <:senbotcross:730967627916378174>  \n> \`\`\`Syntax: ${prefix}[setnick|snick] {user} {new nickname}\n> \n> Usage: Changes a users nickname. \`\`\``)
                 .setTimestamp()
               return message.channel.send(sembed);
               break;
            default:PREFIX
                break;
        }
       

        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase()) || message.member;
        if (member.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) return message.channel.send('\`\`\`Cannot Set or Change Nickname Of This User!\`\`\`')
        let nick = args.slice(1).join(' ');

        try {
        member.setNickname(nick)
        const embed = new MessageEmbed()
            .setColor(`BLACK`)
            .setDescription(`> **Changed Nickname of \`${member.displayName}\` to \`${nick}\`**`)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
        message.channel.send(embed)
        } catch {
            return message.channel.send("\`\`\`Missing Permissions - [CHANGE_NICKNAME]\`\`\`")
        }

        let channel = db.fetch(`modlog_${message.guild.id}`)
        if (!channel) return;

        const ssembed = new MessageEmbed()
            .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
            .setColor("#ff0000")
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
            .setFooter(message.guild.name, message.guild.iconURL())
            .addField("**Moderation**", "setnick")
            .addField("**User's Previous Nick**", member.user.username)
            .addField("**Nick Changed By**", message.author.username)
            .addField("**Nick Changed To**", args[1])
            .addField("**Date**", message.createdAt.toLocaleString())
            .setTimestamp();

            var sChannel = message.guild.channels.cache.get(channel)
            sChannel.send(ssembed)
            if (!sChannel) return;
        

        
    }
}