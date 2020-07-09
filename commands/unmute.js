const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "unmute",
  description: "Unmute anyone",
  category: "moderation",
  usage: "unmute {user}.",
  run: async (client, message, args) => 
  {
    let color = message.member.displayHexColor;
    if (color == '#000000') color = message.member.hoistRole.hexColor;
  let channel = message.channel;
  let roles = message.guild.roles; // collection
  //const adminRole = message.guild.roles.cache.find(r => r.name === 'Admin');
  if (!message.member.hasPermission("MANAGE_ROLES")) {
    return message.channel.send(
      "Sorry but you do not have permission to unmute anyone. You require the permission 'MANAGE_ROLES"
    );
  }

  if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
    return message.channel.send("I do not have permission to manage roles.");
  }

  if (args.length == 0){ 
        
    const sembed = new MessageEmbed()
         .setColor(color)
          .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`**Invalid Operation** :x:  \n\`\`\`Syntax: ,unmute {member}\n\nUsage: Unmutes a user. \`\`\``)
          .setTimestamp()
        return message.channel.send(sembed);
        }

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase()) || message.member;

  if (!channel.permissionOverwrites.get(member.id)){
    const sembed = new MessageEmbed()
      .setColor(color)
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`**${member.user.tag} Already Unmuted** :x: `)
    //.setFooter(``)
     
  return message.channel.send(sembed)
    }
        
  
  
  
channel.permissionOverwrites.get(member.id).delete()

const sembed = new MessageEmbed()
    .setColor(color)
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
   // .setDescription(`**${member}** Muted ✅`)
    .addField(`**${member.user.tag}** Unmuted ✅`, `Message perms have been granted :speaker: `)
   // .setFooter(``)
     
  message.channel.send(sembed)
    
      
    
}}