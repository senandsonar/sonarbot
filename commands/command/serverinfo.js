const { MessageEmbed } = require("discord.js")


const mongoose = require('mongoose');
const Guild = require('../../models/guild');
module.exports={
        name: "serverinfo",
        description: "Pulls the serverinfo of the guild!",
        usage: " ",
        category: "info",
        cooldown: 15,
        accessableby: "everyone",
        aliases: ["sinfo"],
    
    run: async (bot, message, args) => {
        const settings = await Guild.findOne({
          guildID: message.guild.id
        }, (err, guild) => {
          if (err) console.error(err)
        })
        let owner = [];
        
        var onlineCount = message.guild.members.cache.filter(m => m.presence.status === 'online').size
        var offlineCount = message.guild.members.cache.filter(m => m.presence.status === 'offline').size

        
        await bot.users.fetch(message.guild.ownerID).then(o => owner.push(o))
        try {
            let embed = new MessageEmbed()
                .setColor(`#faf6f6`)
                .setTitle("Server Info")
                .setThumbnail(message.guild.iconURL())
                .setAuthor(`${message.guild.name} Info`, message.guild.iconURL())
                .addField("**Server ID**", `> \`${message.guild.id}\``)
                .addField("**Guild Owner**", `> ${owner}`, false)
                .addField("**Members**", `> \`${message.guild.memberCount}\` Total | \`${onlineCount}\` Online | \`${offlineCount}\` Offline `, false)
                .addField("**Created At**", `> ${message.guild.createdAt}`)
                .addField("**Channels**", `> ${message.guild.channels.cache.filter(r => r.type === "text").size} Text Channels | ${message.guild.channels.cache.filter(c => c.type === "voice").size} Voice Channels`)
                .addField("**Region**", `> **${message.guild.region}** `)
                .addField("**Verification Level**", `> **${message.guild.verificationLevel}** `)
                .addField("**Emojis**", `> \`${message.guild.emojis.cache.size}\``, false)
                .addField("**Roles**", `> ${message.guild.roles.cache.size}`, false)
            message.channel.send(embed);
        }
        catch {
            return message.channel.send('Something Went Wrong!')
        }
    }
}