const Discord = require('discord.js')
module.exports = {
    name: "ping",
    category: 'info',
    description: "Returns latency and API ping",
    timeout: 10000,

    
    run: async (bot, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
         message.channel.send(`🏓 Pinging....`).then(msg=>{
        const _ = new Discord.MessageEmbed()
        .setTitle('Pong!')
        .setDescription(`🏓 Pong!\nLatency is ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms\nAPI Latency is ${Math.round(bot.ws.ping)}ms`)
        .setColor('RANDOM')
        .setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
        msg.edit(_);
        msg.edit("\u200B")
    })
    }
}