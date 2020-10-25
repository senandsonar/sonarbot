  
const { MessageEmbed } = require('discord.js');

const mongoose = require('mongoose');
const Guild = require('../../models/guild');
const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
        name: "ping",
        description: "Displays User And Bot Latency",
        usage: " ",
        aliases: ['latency'],
        category: "info",
        accessableby: "everyone",
    run: async(bot, message, args) => {
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
        

        message.channel.send("**Pinging...**").then(m => {
            let ping = m.createdTimestamp - message.createdTimestamp
            const embed = new MessageEmbed()
                .setColor("BLACK")
                .setDescription(`<:hourglass_flowing_sand:699128011743690794> ${message.author.tag}'s Latency: \`${ping}\`\n\n💓 Bot Latency: \`${Math.round(bot.ws.ping)}\``)
            message.channel.send(embed)
            m.delete()
        })
    }
};