const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "mute",
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
      "Sorry but you do not have permission to mute anyone. You require the permission 'MANAGE_ROLES"
    );
  }

  if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
    return message.channel.send("I do not have permission to manage roles.");
  }

  if (args.length == 0){ 
        
    const sembed = new MessageEmbed()
         .setColor(color)
          .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`**Invalid Operation** :x:  \n\`\`\`Syntax: ,mute {member}\n\nUsage: mutes a user. \`\`\``)
          .setTimestamp()
        return message.channel.send(sembed);
        }

   

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase()) || message.member;
  // overwrites 'SEND_MESSAGES' role, only on this specific channel
 
  channel.overwritePermissions([
    {
       id: member.id,
       deny: ['SEND_MESSAGES'],
    }
])

const sembed = new MessageEmbed()
    .setColor(color)
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
   // .setDescription(`**${member}** Muted ✅`)
    .addField(`**${member.user.tag}** Muted ✅`, `Message perms have been revoked 🔇`)
   // .setFooter(``)
     
  message.channel.send(sembed)
  
    
   
      
    
}}