const { MessageEmbed } = require('discord.js');

module.exports = {
        name: "coinflip",
        aliases: ['cf', 'coin', 'flip'],
        category: 'fun',
        description: 'flips a coin',
        usage: ' ',
        accessableby: "everyone",
    
    run: async (bot, message, args) => {
        let color = message.member.displayHexColor;
        if (color == '#000000') color = message.member.hoistRole.hexColor;
        const n = Math.floor(Math.random() * 2);
        let result;
        if (n === 1) result = 'Heads';
        else result = 'Tails';
        const embed = new MessageEmbed()
            .setColor(color)
            .setDescription(`**${message.member.displayName} Flipped ${result}**!`)
        message.channel.send(embed);
    }
}