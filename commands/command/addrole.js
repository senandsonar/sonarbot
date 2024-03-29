const { MessageEmbed } = require("discord.js");

const mongoose = require('mongoose');
const Guild = require('../../models/guild');
const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
        name: "addrole",
        description: "Adds role to a user",
        aliases:['ar'],
        category: "moderation",
        usage: "[name | nickname | mention | ID] <role>",
        accessableby: "Administrator",
    run: async(bot, message, args) => {
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
        
        

        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("\`\`\`You Dont Have The Permissions To Add Roles To Users! - [MANAGE_ROLES]\`\`\`");
        if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("\`\`\`I Dont Have The Permissions To Add Roles To Users! - [MANAGE_ROLES]\`\`\`");
        
        if (args.length == 0){
        
        const sembed = new MessageEmbed()
            .setColor(`BLACK`)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`**Invalid Operation** <:senbotcross:730967627916378174>  \n> \`\`\`Syntax: ${prefix}[addrole|ar] {member} {role name}\n> \n> Usage: Adds a role to a user.\`\`\``)
            .setTimestamp()
        return message.channel.send(sembed);
        }
        
        let rMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!rMember) return message.channel.send("\`\`\`Please Enter A User Name!\`\`\`");
        if (rMember.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) return message.channel.send('\`\`\`Cannot add role to this user. Their role may be above mine in this guilds role hierarchy!\`\`\` ')

        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]) || message.guild.roles.cache.find(rp => rp.name.toLowerCase() === args.slice(1).join(' ').toLocaleLowerCase());
        if (!args[1]) return message.channel.send("\`\`\`Please Enter A Role!\`\`\`")

        if (!role) return message.channel.send("\`\`\`Could Not Find That Role!\`\`\`")

        if (role.managed) return message.channel.send("**Cannot Add That Role To The User!**")
        if (message.guild.me.roles.highest.comparePositionTo(role) <= 0) return message.channel.send('\`\`\`Cannot add role to this user. Their role may be above mine in this guilds role hierarchy!\`\`\`')

        
        if (args.length == 1){
        
            const sembed = new MessageEmbed()
            .setColor(`BLACK`)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`**Invalid Operation** <:senbotcross:730967627916378174>  \n> \`\`\`Syntax: ${prefix}[addrole|ar] {member} {role name}\n> \n> Usage: Adds a role to a user.\`\`\``)
            .setTimestamp()
        return message.channel.send(sembed);
        }

        //if (!role) return message.channel.send("**Could Not Find That Role!**")

        if (role.managed) return message.channel.send("**Cannot Add That Role To The User!**")
        if (message.guild.me.roles.highest.comparePositionTo(role) <= 0) return message.channel.send('**Role Is Currently Higher Than Me Therefore Cannot Add It To The User!**')
        if (rMember.roles.cache.has(role.id)) return message.channel.send("**User Already Has The Role!**")
        if (!rMember.roles.cache.has(role.id)) await rMember.roles.add(role.id);
        try{
        var sembed = new MessageEmbed()
            .setColor(`BLACK`)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`> The role \`${role.name}\` has been added to ${rMember.user.username} <:senbotcheck:730967576007671929> `)
            .setTimestamp()
        message.channel.send(sembed)
    } catch (e) {
        console.log(e);
        m.edit("Error, Try Again! The role you tried to add may not exist!");
    }

    let channel = db.fetch(`modlog_${message.guild.id}`)
        if (!channel) return;

        const embed = new MessageEmbed()
            .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
            .setColor("#ff0000")
            .setThumbnail(rMember.user.displayAvatarURL({ dynamic: true }))
            .setFooter(message.guild.name, message.guild.iconURL())
            .addField("**Moderation**", "addrole")
            .addField("**Added Role to**", rMember.user.username)
            .addField("**Role Added**", role.name)
            .addField("**Added By**", message.author.username)
            .addField("**Date**", message.createdAt.toLocaleString())
            .setTimestamp();

        let sChannel = message.guild.channels.cache.get(channel)
        if (!sChannel) return;
        sChannel.send(embed)

        
    }
};