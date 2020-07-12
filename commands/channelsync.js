const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "channelsync",
  description: "Mute anyone who break rules",
  category: "moderation",
  usage: "mute <@mention>",
  run: async (client, message, args) => 
  {
    let color = message.member.displayHexColor;
    if (color == '#000000') color = message.member.hoistRole.hexColor;
  let channel = message.channel;
  let roles = message.guild.roles; // collection
  
  
  
  //const adminRole = message.guild.roles.cache.find(r => r.name === 'Admin');
  if (!message.member.hasPermission("MANAGE_ROLES")) {
    return message.channel.send(
      "Sorry but you do not have permission to sync channels. You require the permission 'ADMINISTRATOR'"
    );
  }

  if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
    return message.channel.send("I do not have sufficient permissions.");
  }



  if (args.length == 1){ 
        
    const sembed = new MessageEmbed()
         .setColor(color)
          .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`**Invalid Operation** :x:  \n\`\`\`Syntax: ,channelsync\n\nUsage: Syncs a channels perms with the channel category.\nNote: This will reset all specified permissions for the channel. \`\`\``)
          .setTimestamp()
        return message.channel.send(sembed);
        }

   

    
  // overwrites 'SEND_MESSAGES' role, only on this specific channel
  

  



  channel.lockPermissions()
const sembed = new MessageEmbed()
    .setColor(color)
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
   // .setDescription(`**${member}** Muted ✅`)
    .addField(`Channel Synced ✅`, `> Permissions now synced with category.`)
    //.setFooter(``)
    .setTimestamp()
     
  message.channel.send(sembed)
  
    
   
      
    
}}