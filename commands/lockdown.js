const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "lockdown",
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
      "Sorry but you do not have permission to lockdown channels. You require the permission 'ADMINISTRATOR'"
    );
  }

  if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
    return message.channel.send("I do not have sufficient permissions.");
  }

  if (args.length == 1){ 
        
    const sembed = new MessageEmbed()
         .setColor(color)
          .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`**Invalid Operation** :x:  \n\`\`\`Syntax: ,lockdown\n\nUsage: Locks a channel. \`\`\``)
          .setTimestamp()
        return message.channel.send(sembed);
        }

   

    
  // overwrites 'SEND_MESSAGES' role, only on this specific channel
 
  channel.overwritePermissions([
    {
        id: message.guild.id,
       deny: ['SEND_MESSAGES'],
    }
])

const sembed = new MessageEmbed()
    .setColor(color)
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
   // .setDescription(`**${member}** Muted ✅`)
    .addField(`Lockdown Initiated ✅`, ` Channel Locked. 🔒`)
    //.setFooter(``)
    .setTimestamp()
     
  message.channel.send(sembed)
  
    
   
      
    
}}