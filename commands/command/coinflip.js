const { MessageEmbed } = require('discord.js');

const mongoose = require('mongoose');
const Guild = require('../../models/guild');
const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
        name: "coinflip",
        aliases: ['cf'],
        category: 'fun',
        cooldown: 5,
        description: 'Flips a coin',
        accessableby: "everyone",
    
    run: async(bot, message, args) => {
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
        
        
        const n = Math.floor(Math.random() * 2);
        let result;
        if (n === 1) result = 'Heads';
        else result = 'Tails';
        const embed = new MessageEmbed()
            .setColor(`BLACK`)
            .setTitle(`Coinflip!`)
            .addField(`> *${message.member.displayName} Flipped a coin!*\n `, `> *The coin landed on* ***${result}*** 💫`,)
            .setTimestamp()
        message.channel.send(embed);
    }
}