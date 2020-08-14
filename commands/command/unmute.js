const { MessageEmbed } = require("discord.js");


const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
   
      name: "unmute",
  description: "Unmute a member.",
  category: "moderation",
  run: async (client, message, args) => 
  {
    
    
  let channel = message.channel;
  let roles = message.guild.roles; // collection
  //const adminRole = message.guild.roles.cache.find(r => r.name === 'Admin');
  if (!message.member.hasPermission("MANAGE_ROLES")) {
    return message.channel.send(
      "\`\`\`Sorry but you do not have permission to unmute anyone. You require the permission 'MANAGE_ROLES'\`\`\`"
    );
  }

  if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
    return message.channel.send("\`\`\`I do not have permission to unmute members. I require the permission 'MANAGE_ROLES'\`\`\`");
  }

  if (args.length == 0){ 
        
    const sembed = new MessageEmbed()
         .setColor(`#faf6f6`)
          .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`**Invalid Operation** <:senbotcross:730967627916378174>  \n> \`\`\`Syntax: ${prefix}unmute {member}\n> \n> Usage: Unmutes a user. \`\`\``)
          .setTimestamp()
        return message.channel.send(sembed);
        }

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase()) || message.member;

  if (!channel.permissionOverwrites.get(member.id)){
    const sembed = new MessageEmbed()
      .setColor(`#faf6f6`)
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`**${member.user.tag} Already Unmuted** <:senbotcross:730967627916378174> `)
    //.setFooter(``)
     
  return message.channel.send(sembed)
    }
        
  
  
  
channel.permissionOverwrites.get(member.id).delete()

const sembed = new MessageEmbed()
    .setColor(`#faf6f6`)
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
   // .setDescription(`**${member}** Muted <:senbotcheck:730967576007671929>`)
    .addField(`**${member.user.tag}** Unmuted In \`#${channel.name}\` <:senbotcheck:730967576007671929>`, `> Message perms have been granted :speaker: `)
    .addField(`Message Perms Given By:`, `> ${message.author}`)
   // .setFooter(``)
     
  message.channel.send(sembed)

  let channell = db.fetch(`modlog_${message.guild.id}`)
        if (!channell) return;

        let embed = new MessageEmbed()
            .setColor('RED')
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
            .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
            .addField("**Moderation**", "unmute")
            .addField("**Unmuted**", member.user.username)
            .addField("**Moderator**", message.author.username)
            .addField("**Date**", message.createdAt.toLocaleString())
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp();

        var sChannel = message.guild.channels.cache.get(channell)
        if (!sChannel) return;
        sChannel.send(embed)
    
      
    
}}