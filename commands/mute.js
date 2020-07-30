const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "mute",
  description: "Mute anyone who break rules",
  category: "moderation",
  run: async (client, message, args) => 
  {
    
  let channel = message.channel;
  let roles = message.guild.roles; // collection
  
  
  //const adminRole = message.guild.roles.cache.find(r => r.name === 'Admin');
  if (!message.member.hasPermission("MANAGE_ROLES")) {
    return message.channel.send(
      "\`\`\`Sorry but you do not have permission to mute anyone. You require the permission 'MANAGE_ROLES'\`\`\`"
    );
  }

  if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
    return message.channel.send("\`\`\`I do not have permission to mute anyone. I require the permission 'MANAGE_ROLES'\`\`\`");
  }

  if (args.length == 0){ 
        
    const sembed = new MessageEmbed()
         .setColor(`#faf6f6`)
          .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`**Invalid Operation** :x:  \n> \`\`\`Syntax: ,mute {member}\n> \n> Usage: mutes a user. \`\`\``)
          .setTimestamp()
        return message.channel.send(sembed);
        }

   

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase()) || message.member;
  // overwrites 'SEND_MESSAGES' role, only on this specific channel
  if (channel.permissionOverwrites.get(member.id)){
    const sembed = new MessageEmbed()
      .setColor(`#faf6f6`)
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`**${member.user.tag} Already muted or is unable to view this channel!** :x: `)
    //.setFooter(``)
     
  return message.channel.send(sembed)
    }
  


  channel.updateOverwrite(member.id, { SEND_MESSAGES: false });

const sembed = new MessageEmbed()
    .setColor(`#faf6f6`)
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
   // .setDescription(`**${member}** Muted ✅`)
    .addField(`**${member.user.tag}** Muted In \`#${channel.name}\`✅`, `> Message perms have been revoked 🔇`)
    .addField(`Message Perms Removed By:`, `> ${message.author}`)
   // .setFooter(``)
     
  message.channel.send(sembed)
  
    
   
      
    
}}