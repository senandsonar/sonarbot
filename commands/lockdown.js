const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "lockdown",
  description: "Locks a channel.",
  aliases: ['lock'],
  category: "moderation",
  usage: "mute <@mention>",
  run: async (client, message, args) => 
  {
    
  let channel = message.channel;
  let roles = message.guild.roles; // collection
  
  
  
  //const adminRole = message.guild.roles.cache.find(r => r.name === 'Admin');
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    return message.channel.send(
      "\`\`\`Sorry but you do not have permission to lockdown channels. You require the permission 'ADMINISTRATOR'\`\`\`"
    );
  }

  if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
    return message.channel.send("\`\`\`I do not have sufficient permissions.\`\`\`");
  }



  if (args.length == 1){ 
        
    const sembed = new MessageEmbed()
         .setColor(`#faf6f6`)
          .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`**Invalid Operation** :x:  \n> \`\`\`Syntax: ,[lockdown|lock]\n> \n>  Usage: Locks a channel.\`\`\``)
          .setTimestamp()
        return message.channel.send(sembed);
        }

   

    
  // overwrites 'SEND_MESSAGES' role, only on this specific channel
  if (!channel.permissionsFor(channel.guild.roles.everyone).has("SEND_MESSAGES")) {
  const sembed = new MessageEmbed()
    .setColor(`#faf6f6`)
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
  .setDescription(`**Channel is already locked** :x: `)
  //.setFooter(``)
   
return message.channel.send(sembed)
  }
  



channel.updateOverwrite(channel.guild.roles.everyone, { SEND_MESSAGES: false })
const sembed = new MessageEmbed()
    .setColor(`#faf6f6`)
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
   // .setDescription(`**${member}** Muted ✅`)
    .addField(`Lockdown Initiated ✅`, `> Channel Locked. 🔒`)
    //.setFooter(``)
    .setTimestamp()
     
  message.channel.send(sembed)
  
    
   
      
    
}}