const { MessageEmbed } = require("discord.js");


const mongoose = require('mongoose');
const Guild = require('../../models/guild');
module.exports={
  name: "hidechannel",
  aliases: ['chide'],
  description: "Hides a channel from every member without Admin.",
  category: "moderation",
  run: async (client, message, args) => 
  {
    
  let channel = message.channel;
  let roles = message.guild.roles; // collection
  
  
  //const adminRole = message.guild.roles.cache.find(r => r.name === 'Admin');
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    return message.channel.send(
      "\`\`\`Sorry but you do not have permission to hide channels. You require the permission 'ADMINISTRATOR'\`\`\`"
    );
  }

  if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
    return message.channel.send("\`\`\`I do not have sufficient permissions. - MANAGE_ROLES\`\`\`");
  }

  if (args.length == 1){ 
        
    const sembed = new MessageEmbed()
         .setColor(`#faf6f6`)
          .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`**Invalid Operation** :x:  \n> \`\`\`Syntax: ${settings.prefix}[hidechannel|chide]\n> \n> Usage: hides a channel from everyone.\`\`\``)
          .setTimestamp()
        return message.channel.send(sembed);
        }

   

    //let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase()) || message.member;
  // overwrites 'SEND_MESSAGES' role, only on this specific channel
 
  


channel.updateOverwrite(channel.guild.roles.everyone, { VIEW_CHANNEL: false });

const sembed = new MessageEmbed()
    .setColor(`#faf6f6`)
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
   // .setDescription(`**${member}** Muted <:senbotcheck:730967576007671929>`)
    .addField(`**Channel Hidden From Everyone!** <:senbotcheck:730967576007671929>`, `> View perms have been revoked :x:`)
    .setFooter(`Users with Admin will be able to see the channel.`)
    .setTimestamp()
     
  message.channel.send(sembed)
}}