const { MessageEmbed } = require("discord.js");
const { formatDate } = require("../../functions.js");

const mongoose = require('mongoose');
const Guild = require('../../models/guild');
const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
        name: "userinfo",
        category: "info",
        cooldown: 5,
        aliases: ["uinfo"],
        description: "Returns user information",
        usage: "[name | nickname | mention | ID] (optional)",
        accessableby: "everyone",
    
    run: async(bot, message, args) => {
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
        
        let member = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
        
        if(!member)
        return message.channel.send("**Enter A Valid User!**");
      


const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
var d = new Date();
const joined = member.joinedAt
const today = Date.now()
const created = member.user.createdAt
const createdd = formatDate(member.user.createdAt)
const joinedd = formatDate(member.joinedAt)


console.log(d.toLocaleDateString());
const diffDays = Math.round(Math.abs((today - created) / oneDay));
const diffDayss = Math.round(Math.abs((today - joined) / oneDay));
        
        const roles = member.roles.cache
            .filter(r => r.id !== message.guild.id)
            .map(r => r.name).join(", ") || 'None';
        

        const embed = new MessageEmbed()
            .setTitle("User Info")
            .setFooter(message.guild.name, message.guild.iconURL())
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true}))
            .setColor(`#faf6f6`)
            .addField("ID ","`" + ` ${member.user.id} `+"`")
            //.addField("**ID**", `${member.user.id}`)
            .addField("**Name**", `${member.user.tag}`, )
            .addField("**Account Created**", `${createdd} **(${diffDays} days ago)**`)
            .addField("**Joined On**", `${joinedd} **(${diffDayss} days ago)**`)
            .addField("**Role List**", `${roles}`, false)
            .setTimestamp()

       

        message.channel.send(embed);
    }
}