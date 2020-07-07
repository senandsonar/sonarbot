const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "mute",
  description: "Mute anyone who break rules",
  category: "moderation",
  usage: "mute <@mention> <reason>",
  run: async (client, message, args) => 
  {
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase()) || message.member;
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "Sorry but you do not have permission to mute anyone. You require the permission 'MANAGE_ROLES"
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("I do not have permission to manage roles.");
    }

    //const user = message.mentions.members.first();
    
    if(!member) {
      return message.channel.send("Please mention the member to who you want to mute")
    }
    
    if(member.id === message.author.id) {
      return message.channel.send("I won't mute you -_-");
    }
    
    
    let reason = args.slice(1).join(" ")
    
    
    if(!reason) {
      return message.channel.send("Please Give the reason to mute the member")
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
    
await message.channel.send(`You muted **${member.displayName}** for \`${reason}\``)
    
    member.send(`You are muted in **${message.guild.name}** for \`${reason}\``)
    
    
//WE ARE DONE HERE 
    
  }
};