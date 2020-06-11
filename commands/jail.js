const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "jail",
  description: "Mute anyone who break rules",
  category: "moderation",
  usage: "mute <@mention> <reason>",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "Sorry but you do not have permission to jail anyone. You require the permission 'MANAGE_ROLES'"
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("I do not have permission to manage roles.");
    }

    const user = message.mentions.members.first();
    
    if(!user) {
      return message.channel.send("Please mention the member to who you want to jail")
    }
    
    if(user.id === message.author.id) {
      return message.channel.send("I won't jail you -_-");
    }
    
    
    let reason = args.slice(1).join(" ")
    
    
    if(!reason) {
      return message.channel.send("Please Give the reason to jail the member")
    }
    
    let muterole = message.guild.roles.cache.find(x => x.name === "Jailed")
    
    
      if(!muterole) {
      return message.channel.send("This server do not have role with name `Jailed`")
    }
    
    
   if(user.roles.cache.has(muterole)) {
      return message.channel.send("Given User is already jailed.")
    }
    
  
    
    
    user.roles.add(muterole)
    
await message.channel.send(`You jailed **${message.mentions.users.first().username}** For \`${reason}\``)
    
    user.send(`You are jailed in **${message.guild.name}** For \`${reason}\``) 
    
  }
};