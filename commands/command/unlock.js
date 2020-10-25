const { MessageEmbed } = require("discord.js");






const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
   
      name: "unlockdown",
  description: "Unlocks a locked channel.",
  aliases: ['unlock'],
  category: "moderation",
  usage: "mute <@mention>",
  run: async (client, message, args) => 
  {
    
    
  let channel = message.channel;
  let roles = message.guild.roles; // collection
  
  
  
  //const adminRole = message.guild.roles.cache.find(r => r.name === 'Admin');
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    return message.channel.send(
      "\`\`\`Sorry but you do not have permission to unlock channels. You require the permission 'ADMINISTRATOR'\`\`\`"
    );
  }

  if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
    return message.channel.send("I do not have permission to unlock channels. I require the permission 'MANAGE_ROLES'\`\`\`");
  }

  if (args.length == 1){ 
        
    const sembed = new MessageEmbed()
         .setColor(`BLACK`)
          .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`**Invalid Operation** <:senbotcross:730967627916378174>  \n> \`\`\`Syntax: ${prefix}unlock\n> \n> Usage: Unlocks a channel. \`\`\``)
          .setTimestamp()
        return message.channel.send(sembed);
        }

   

    
  // overwrites 'SEND_MESSAGES' role, only on this specific channel
  if (channel.permissionsFor(channel.guild.roles.everyone).has("SEND_MESSAGES")){
    const sembed = new MessageEmbed()
      .setColor(`BLACK`)
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**Channel is already unlocked** <:senbotcross:730967627916378174> `)
    //.setFooter(``)
     
  return message.channel.send(sembed)
    }
  




  channel.updateOverwrite(channel.guild.roles.everyone, { SEND_MESSAGES: null })

const sembed = new MessageEmbed()
    .setColor(`BLACK`)
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
   // .setDescription(`**${member}** Muted <:senbotcheck:730967576007671929>`)
    .addField(`Lockdown Ended <:senbotcheck:730967576007671929>`, `> Channel Unlocked. :unlock: `)
    .setTimestamp()
     
  message.channel.send(sembed)
  
    
   
      
  
}}