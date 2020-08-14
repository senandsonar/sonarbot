const {MessageEmbed} = require('discord.js')
const mongoose = require('mongoose');
const Guild = require('../../models/guild');
const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
    name: "gay",
    description: "Shows how gay you are.",
    cooldown: 5,
    category: "fun",
    run: async(bot, message, args) => {
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
        
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
        let question = message.content.slice(7)
        if (args.length == 2){
        
        
            const sembed = new MessageEmbed()
                .setColor(`#faf6f6`)
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**Invalid Operation** <:senbotcross:730967627916378174>  \n> \`\`\`Syntax: ${prefix}gay\n> \n> Usage: Shows how gay you are. \`\`\``)
                .setTimestamp()
                return message.channel.send(sembed);
                }
        else{
            
            var randomnumber=Math.floor(Math.random()*101);

            let Embed = new MessageEmbed()
            
            .setAuthor(`Gay Measurement`, user.user.displayAvatarURL({ dynamic: true }))
            .setDescription(`${user.user.username} is ${randomnumber}\% gay. :rainbow_flag: `)
            .setColor(`#faf6f6`)
            message.channel.send(Embed)
        }
    }
}