const { MessageEmbed } = require("discord.js");





module.exports = {
  name: "unlock",
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
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    return message.channel.send(
      "Sorry but you do not have permission to unlock channels. You require the permission 'ADMINISTRATOr"
    );
  }

  if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
    return message.channel.send("I do not have sufficient permissions.");
  }

  if (args.length == 1){ 
        
    const sembed = new MessageEmbed()
         .setColor(color)
          .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`**Invalid Operation** :x:  \n\`\`\`Syntax: ,unlock\n\nUsage: Unlocks a channel. \`\`\``)
          .setTimestamp()
        return message.channel.send(sembed);
        }

   

    
  // overwrites 'SEND_MESSAGES' role, only on this specific channel
  if (channel.permissionsFor(channel.guild.roles.everyone).has("SEND_MESSAGES")){
    const sembed = new MessageEmbed()
      .setColor(color)
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**Channel is already unlocked** :x: `)
    //.setFooter(``)
     
  return message.channel.send(sembed)
    }
  




  channel.updateOverwrite(channel.guild.roles.everyone, { SEND_MESSAGES: null })

const sembed = new MessageEmbed()
    .setColor(color)
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
   // .setDescription(`**${member}** Muted ✅`)
    .addField(`Lockdown Ended ✅`, ` Channel Unlocked. :unlock: `)
    .setTimestamp()
     
  message.channel.send(sembed)
  
    
   
      
    
}}