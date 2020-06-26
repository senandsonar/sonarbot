const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "jail",
  description: "Mute anyone who break rules",
  category: "moderation",
  usage: "mute <@mention> <reason>",
  run: async (client, message, args) => {
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase()) || message.member;
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "Sorry but you do not have permission to jail anyone. You require the permission 'MANAGE_ROLES'"
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("I do not have permission to manage roles.");
    }

    //const member = message.mentions.members.first();
    
    if(!member) {
      return message.channel.send("Please mention the member to who you want to jail")
    }
    
    if(member.id === message.author.id) {
      return message.channel.send("I won't jail you -_-");
    }
    
    
    let reason = args.slice(1).join(" ")
    
    
    if(!reason) {
      return message.channel.send("Please Give the reason to jail the member")
    }
    
    let muterole = message.guild.roles.cache.find(r => r.name === "Jailed")
    
    
      if(!muterole) {
      return message.channel.send("This server do not have role with name `Jailed`") 
    }
    
    
   if(member.roles.cache.has(muterole)) {
      return message.channel.send("Given User is already jailed.")
    }
    
  
    
    
    member.roles.add(muterole)
    
    await message.channel.send(`You jailed **${member.displayName}** For \`${reason}\``)
    
    member.send(`You are jailed in **${message.guild.name}** For \`${reason}\``)
    
  }
};