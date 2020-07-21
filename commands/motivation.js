const { MessageEmbed } = require('discord.js');
const jsonQuotes = require('../motivational.json')

module.exports = {
        name: 'motivation',
        cooldown: 5,
        aliases: ['motivate', 'motivational'],
        description: 'Get a random motivation quote',
        category: "fun",
        usage: "[username | nickname | mention | ID](optional)",
        accessableby: "everyone",
    
    run: async (bot, message, args) => {
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
        let color = message.member.displayHexColor;
        if (color == '#000000') color = message.member.hoistRole.hexColor;
        const randomQuote = jsonQuotes.quotes[Math.floor((Math.random() * jsonQuotes.quotes.length))];
        if (!args[0]) {
            const quoteEmbed = new MessageEmbed()
                .setAuthor(message.guild.name, message.guild.iconURL())
                .setTitle(randomQuote.author)
                .setDescription(randomQuote.text)
                .setColor(color)
                .setFooter(member.displayName, member.user.displayAvatarURL())
                .setTimestamp()
            return message.channel.send(quoteEmbed);
        }
         else if (args[0]) {
            const embed = new MessageEmbed()
                .setAuthor(message.guild.name, message.guild.iconURL())
                .setColor(color)
                .setTitle(`${randomQuote.author} -`)
                .setDescription(`**${randomQuote.text}** \n\nBy ${message.member.displayName} to ${member.displayName}`)
                .setFooter(member.displayName, member.user.displayAvatarURL())
                .setTimestamp()
            message.channel.send(embed)
        }
    }
};