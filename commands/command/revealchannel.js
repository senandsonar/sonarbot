const { MessageEmbed } = require("discord.js");




const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
   
      name: "revealchannel",
  description: "Reveals a hidden channel.",
  category: "moderation",
  aliases: ['creaveal'],
  run: async (client, message, args) => 
  {
    
    
  let channel = message.channel;
  let roles = message.guild.roles; // collection
  
  
  //const adminRole = message.guild.roles.cache.find(r => r.name === 'Admin');
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    return message.channel.send(
      "\`\`\`Sorry but you do not have permission to reveal channels. You require the permission 'ADMINISTRATOR'\`\`\`"
    );
  }

  if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
    return message.channel.send("\`\`\`I do not have sufficient permissions. - MANAGE_ROLES\`\`\` ");
  }

  if (args.length == 1){ 
        
    const sembed = new MessageEmbed()
         .setColor(`BLACK`)
          .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`**Invalid Operation** <:senbotcross:730967627916378174>  \n> \`\`\`Syntax: ${prefix}[revealchannel|creveal]\n> \n> Usage: reveals a channel to everyone.\`\`\``)
          .setTimestamp()
        return message.channel.send(sembed);
        }

   

    //let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase()) || message.member;
  // overwrites 'SEND_MESSAGES' role, only on this specific channel
 
     
 
  


channel.updateOverwrite(channel.guild.roles.everyone, { VIEW_CHANNEL: null });

const sembed = new MessageEmbed()
    .setColor(`BLACK`)
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
   // .setDescription(`**${member}** Muted <:senbotcheck:730967576007671929>`)
    .addField(`**Channel Revealed To Everyone!** <:senbotcheck:730967576007671929>`, `> View perms have been given <:senbotcheck:730967576007671929>`)
    .setTimestamp()
     
  message.channel.send(sembed)
}}