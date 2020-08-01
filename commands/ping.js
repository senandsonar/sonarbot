  
const { MessageEmbed } = require('discord.js');

module.exports = {
        name: "ping",
        description: "Displays User And Bot Latency",
        usage: " ",
        aliases: ['latency'],
        category: "info",
        accessableby: "everyone",
    run: async (bot, message, args) => {

        message.channel.send("**Pinging...**").then(m => {
            let ping = m.createdTimestamp - message.createdTimestamp
            const embed = new MessageEmbed()
                .setColor("#faf6f6")
                .setDescription(`<:hourglass_flowing_sand:699128011743690794> ${message.author.tag}'s Latency: \`${ping}\`\n\n💓 Bot Latency: \`${Math.round(bot.ws.ping)}\``)
            message.channel.send(embed)
            m.delete()
        })
    }
};