const { MessageEmbed } = require("discord.js")

const { formatDate } = require("../../functions.js");
const mongoose = require('mongoose');
const Guild = require('../../models/guild');
const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
        name: "serverinfo",
        description: "Pulls the serverinfo of the guild!",
        usage: " ",
        category: "info",
        cooldown: 15,
        accessableby: "everyone",
        aliases: ["sinfo"],
    
    run: async(bot, message, args) => {
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
        
        let owner = [];
        
        var onlineCount = message.guild.members.cache.filter(m => m.presence.status === 'online').size
        var offlineCount = message.guild.members.cache.filter(m => m.presence.status === 'offline').size
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        var d = new Date();
       
        const today = Date.now()
       
        
        const created = formatDate(message.guild.createdAt)
        const createdd = message.guild.createdAt
        
       
        const diffDays = Math.round(Math.abs((today - createdd) / oneDay));
        
        
        await bot.users.fetch(message.guild.ownerID).then(o => owner.push(o))
        try {
            let embed = new MessageEmbed()
                .setColor(`#faf6f6`)
                .setTitle("Server Info")
                .setThumbnail(message.guild.iconURL())
                .setAuthor(`${message.guild.name} Info`, message.guild.iconURL())
                .addField("**Server ID**", `> \`${message.guild.id}\``)
                .addField("**Guild Owner**", `> ${owner}`, false)
                .addField("**Members**", `> \`${message.guild.memberCount}\` Total | \`${offlineCount}\` Online`)
                .addField("**Created At**", `> ${created} **(${diffDays} days ago)**`)
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