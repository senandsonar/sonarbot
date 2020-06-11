module.exports = {
    name: "unjail",
    category: "moderation",
    run: async (client, message, args) => {
      if (!message.member.hasPermission("MANAGE_ROLES")) {
        return message.channel.send(
          "Sorry but you do not have permission to unjail anyone. You require the permission 'MANAGE_ROLES"
        );
      }
  
      if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
        return message.channel.send("I do not have permission to manage roles.");
      }
  
      const user = message.mentions.members.first();
  
      if (!user) {
        return message.channel.send(
          "Please mention the member to who you want to unjail"
        );
      }
      
      let muterole = message.guild.roles.cache.find(x => x.name === "Jailed")
      
      
   if(user.roles.cache.has(muterole)) {
        return message.channel.send("This member isn't Jailed!")
      }
      
      
      user.roles.remove(muterole)
      
      await message.channel.send(`**${message.mentions.users.first().username}** is unjailed!`)
      
      user.send(`You are now unjailed from **${message.guild.name}**`)
  
    }
  };