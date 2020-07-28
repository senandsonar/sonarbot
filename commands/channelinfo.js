const { MessageEmbed } = require('discord.js');

module.exports = {
        name: "channelinfo",
        aliases: ['cinfo'],
        category: "info",
        cooldown: 5,
        description: "Shows Channel Info",
        usage: "[ channel mention | channel name | ID] (optional)",
        accessableby: "everyone",
    run: async (bot, message, args) => {
        let channel = message.mentions.channels.first() || bot.guilds.cache.get(message.guild.id).channels.cache.get(args[0]) || message.guild.channels.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.channel;
        if (!channel) return message.channel.send("**Channel Not Found!**");
        

        let channelembed = new MessageEmbed()
            .setTitle(`Channel Information for ${channel.name}`)
            .setThumbnail(message.guild.iconURL())
            .addField(`**Channel ID**`, `\`${channel.id}\``, false)
            .addField("**NSFW**", channel.nsfw, false)
            .addField("**Channel Type**", channel.type)
            .addField("**Channel Description**", `${channel.topic || "No Description"}`)
            .addField("**Channel Created At**", channel.createdAt)
            .setColor(`#faf6f6`)
        message.channel.send(channelembed);
    }
}