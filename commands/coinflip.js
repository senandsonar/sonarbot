const { MessageEmbed } = require('discord.js');

module.exports = {
        name: "coinflip",
        aliases: ['cf', 'coin', 'flip'],
        category: 'fun',
        cooldown: 5,
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
            .setTitle(`Coinflip!`)
            .addField(`> *${message.member.displayName} Flipped a coin!*\n `, `> *The coin landed on* ***${result}*** 💫`,)
            .setTimestamp()
        message.channel.send(embed);
    }
}