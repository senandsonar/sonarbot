const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "unmute",
    category: "moderation",
    run: async (client, message, args) => {
      let color = message.member.displayHexColor;
        if (color == '#000000') color = message.member.hoistRole.hexColor;
      
      if (!message.member.hasPermission("MANAGE_ROLES")) {
        return message.channel.send(
          "Sorry but you do not have permission to unmute anyone. You require the permission 'MANAGE_ROLES"
        );
      }
  
      if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
        return message.channel.send("I do not have permission to manage roles.");
      }
  
     
  
      if (!args[0]){ 
        
        const sembed = new MessageEmbed()
             .setColor(color)
              .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
              .setDescription(`**Invalid Operation** :x:  \n\`\`\`Syntax: ,unmute {member}\n\nUsage: Unmutes a user. \`\`\``)
              .setTimestamp()
            message.channel.send(sembed);
            }
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase()) || message.member;  
  let muterole = message.guild.roles.cache.find(r => r.name === "Muted")
      
      
   if(member.roles.cache.has(muterole)) {
        return message.channel.send("A mute role doesn't currently exist in this server!")
      }
      
      
      member.roles.remove(muterole)
      
    const sembed = new MessageEmbed()
      .setColor(color)
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`You unmuted **${member}** ✅`)
      .setFooter(`Message perms have been returned. 🔊 `)
     
  message.channel.send(sembed)
      
  member.send(`You have been unmuted in **${message.guild.name}**`)
  
    }
  };