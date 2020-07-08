const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "mute",
  description: "Mute anyone who break rules",
  category: "moderation",
  usage: "mute <@mention> <reason>",
  run: async (client, message, args) => 
  {
    let color = message.member.displayHexColor;
        if (color == '#000000') color = message.member.hoistRole.hexColor;
    //let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase()) || message.member;
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "Sorry but you do not have permission to mute anyone. You require the permission 'MANAGE_ROLES"
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("I do not have permission to manage roles.");
    }

    //const user = message.mentions.members.first();
    
    if (!args[0]){ 
        
      const sembed = new MessageEmbed()
           .setColor(color)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`**Invalid Operation** :x:  \n\`\`\`Syntax: ,mute {member} {reason}\n\nUsage: mutes a user. \`\`\``)
            .setTimestamp()
          message.channel.send(sembed);
          }
          let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase()) || message.member;
    if(member.id === message.author.id) {
      return message.channel.send("I won't mute you -_-");
    }
    
    
    let reason = args.slice(1).join(" ")
    
    
    if(!reason) {
        
      const sembed = new MessageEmbed()
           .setColor(color)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`**Invalid Operation** :x:  \n\`\`\`Syntax: ,mute {member} {reason}\n\nUsage: mutes a user. \`\`\``)
            .setTimestamp()
          return message.channel.send(sembed);
          }
    
    
  //TIME TO LET MUTED ROLE
    
    let muterole = message.guild.roles.cache.find(r => r.name === "Muted")
    
    
      if(!muterole) {
      return message.channel.send("This server does not have role with name `Muted`")
    }
    
    
   if(member.roles.cache.has(muterole)) {
      return message.channel.send("Given User is already muted")
    }
    
  
    
    
    member.roles.add(muterole)
    

  const sembed = new MessageEmbed()
    .setColor(color)
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`You muted **${member}** for \`${reason}\` ✅`)
    .setFooter(`Message perms have been revoked 🔇`)
     
  message.channel.send(sembed)
    
    member.send(`You are muted in **${message.guild.name}** for \`${reason}\``)
    
    
//WE ARE DONE HERE 
    
  }
};