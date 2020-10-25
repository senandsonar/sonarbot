const { MessageEmbed } = require("discord.js");
const { formatDate } = require("../../functions.js");

const mongoose = require('mongoose');
const Guild = require('../../models/guild');
const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
        name: "rolelist",
        category: "info",
        aliases:['rlist'],
        cooldown: 8,
        description: "Returns info about a role.",
        accessableby: "everyone",
    
    run: async(bot, message, args) => {
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
        
//let member = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
        
       // let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
        
        let roles = message.guild.roles.cache
            .filter(r => r.id !== message.guild.id)
            .map(r => r.name).join("\n") || 'none';
            
    

        const embed = new MessageEmbed()
            .setTitle("Server Role List")
            .setFooter(message.guild.name, message.guild.iconURL())
            .setColor(`BLACK`)
            .setDescription(`${roles}`)
            .setTimestamp()

       

        message.channel.send(embed);
    }
}