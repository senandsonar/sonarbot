const { MessageEmbed } = require('discord.js')


const mongoose = require('mongoose');
const Guild = require('../../models/guild');
const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
        name: "uptime",
        description: "Shows Uptime of bot",
        aliases: ["up"],
        category: "info",
        cooldown: 10,
        accessableby: "everyone",

        
    
    run: async(bot, message, args) => {
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
        let days = Math.floor(bot.uptime / 86400000);
        let hours = Math.floor(bot.uptime / 3600000) % 24;
        let minutes = Math.floor(bot.uptime / 60000) % 60;
        let seconds = Math.floor(bot.uptime / 1000) % 60;

        
    


        const embed = new MessageEmbed()
            .setTitle("Uptime")
            .setColor(`#faf6f6`)
            .setDescription(`${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`)
            .setFooter(message.guild.name, message.guild.iconURL())
            .setAuthor(bot.user.username, bot.user.displayAvatarURL())  
        message.channel.send(embed);
    }
}