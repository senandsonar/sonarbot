const { MessageEmbed } = require('discord.js');

module.exports = {
        name: "coinflip",
        aliases: ['cf'],
        category: 'fun',
        cooldown: 5,
        description: 'Flips a coin',
        accessableby: "everyone",
    
    run: async (bot, message, args) => {
        
        const n = Math.floor(Math.random() * 2);
        let result;
        if (n === 1) result = 'Heads';
        else result = 'Tails';
        const embed = new MessageEmbed()
            .setColor(`#faf6f6`)
            .setTitle(`Coinflip!`)
            .addField(`> *${message.member.displayName} Flipped a coin!*\n `, `> *The coin landed on* ***${result}*** 💫`,)
            .setTimestamp()
        message.channel.send(embed);
    }
}