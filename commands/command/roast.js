const { MessageEmbed } = require('discord.js');
const roasts = require('../../roast.json');

const mongoose = require('mongoose');
const Guild = require('../../models/guild');
module.exports={
        name: "roast",
        category: "fun",
        noalias: [''],
        cooldown: 5,
        description: "Roasts people",
        usage: "[username | nickname | mention | ID]",
        accesableby: "everyone",
    
    run: async (bot, message, args) => {
        const settings = await Guild.findOne({
          guildID: message.guild.id
        }, (err, guild) => {
          if (err) console.error(err)
        })

        

        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase());

        let roast = roasts.roast[Math.floor((Math.random() * roasts.roast.length))];

        if(!args[0]) {
            const sembed = new MessageEmbed()
                .setAuthor(message.guild.name, message.guild.iconURL())
                .setColor(`#faf6f6`)
                .setDescription("**Do You Really Want To Roast Yourself?**")
                .setFooter(message.member.displayName, message.author.displayAvatarURL())
                .setTimestamp()
            message.channel.send(sembed);
        }
        else if (args[0]) {
            const embed = new MessageEmbed()
                .setAuthor(message.guild.name, message.guild.iconURL())
                .setTitle(`${message.author.username}-`)
                .setColor(`#faf6f6`)
                .setDescription(`${roast}`)
                .setFooter(member.displayName, member.user.displayAvatarURL())
                .setTimestamp()
            message.channel.send(embed);
        }
    }
}