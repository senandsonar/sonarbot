const { MessageEmbed } = require("discord.js");


const mongoose = require('mongoose');
const Guild = require('../../models/guild');
module.exports={
  name: "channelsync",
  aliases: ['csync'],
  description: "Syncs a channel's permissions with the catgeory it is in. ",
  category: "moderation",
  
  run: async (client, message, args) => 
  {
    const settings = await Guild.findOne({
      guildID: message.guild.id
    }, (err, guild) => {
      if (err) console.error(err)
    })
  {
    
  let channel = message.channel;
  let roles = message.guild.roles; // collection
  
  
  
  //const adminRole = message.guild.roles.cache.find(r => r.name === 'Admin');
  if (!message.member.hasPermission("MANAGE_ROLES")) {
    return message.channel.send(
      "\`\`\`Sorry but you do not have permission to sync channels. You require the permission 'ADMINISTRATOR'\`\`\`"
    );
  }

  if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
    return message.channel.send("\`\`\`I do not have sufficient permissions.\`\`\`");
  }



  if (args.length == 1){ 
        
    const sembed = new MessageEmbed()
         .setColor(`#faf6f6`)
          .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`**Invalid Operation** <:senbotcross:730967627916378174>  \n> \`\`\`Syntax: ${settings.prefix}[channelsync|csync]\n> \n> Usage: Syncs a channels perms with the channel category.\n> \n> Note: This will reset all specified permissions for the channel.\`\`\``)
          .setTimestamp()
        return message.channel.send(sembed);
        }

   

    
  // overwrites 'SEND_MESSAGES' role, only on this specific channel
  

  



  channel.lockPermissions()
const sembed = new MessageEmbed()
    .setColor(`#faf6f6`)
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
   // .setDescription(`**${member}** Muted <:senbotcheck:730967576007671929>`)
    .addField(`Channel Synced <:senbotcheck:730967576007671929>`, `> Permissions now synced with category.`)
    //.setFooter(``)
    .setTimestamp()
     
  message.channel.send(sembed)
  
    
   
      
    
}}}