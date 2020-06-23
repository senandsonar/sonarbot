module.exports = {
    name: "unmute",
    category: "moderation",
    run: async (client, message, args) => {
      let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase()) || message.member;
      if (!message.member.hasPermission("MANAGE_ROLES")) {
        return message.channel.send(
          "Sorry but you do not have permission to unmute anyone. You require the permission 'MANAGE_ROLES"
        );
      }
  
      if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
        return message.channel.send("I do not have permission to manage roles.");
      }
  
     
  
      if (!member) {
        return message.channel.send(
          "Please mention the member who you want to unmute!"
        );
      }
      
      let muterole = message.guild.roles.cache.find(r => r.name === "Muted")
      
      
   if(member.roles.cache.has(muterole)) {
        return message.channel.send("A mute role doesn't currently exist in this server!")
      }
      
      
      member.roles.remove(muterole)
      
      await message.channel.send(`**${member.displayName}** is unmuted`)
      
      user.send(`You are now unmuted from **${message.guild.name}**`)
  
    }
  };