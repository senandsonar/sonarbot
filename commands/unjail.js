const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "unjail",
    category: "moderation",
    run: async (client, message, args) => {
      let color = message.member.displayHexColor;
        if (color == '#000000') color = message.member.hoistRole.hexColor;
      
      if (!message.member.hasPermission("MANAGE_ROLES")) {
        return message.channel.send(
          "Sorry but you do not have permission to unjail anyone. You require the permission 'MANAGE_ROLES"
        );
      }
  
      if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
        return message.channel.send("I do not have permission to manage roles.");
      }
  
      //const user = message.mentions.members.first();
  
      if (!args[0]) {
        
        const sembed = new MessageEmbed()
            .setColor(color)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`**Invalid Operation** :x:  \n\`\`\`Syntax: ,unjail {member}\n\nUsage: Unjails a user. \`\`\``)
            .setTimestamp()
            return message.channel.send(sembed);
            }
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase()) || message.member;  
  let muterole = message.guild.roles.cache.find(r => r.name === "Jailed")
      
      
   if(member.roles.cache.has(muterole)) {
        return message.channel.send("This member isn't Jailed!")
      }
      
      
      member.roles.remove(muterole)
      
      await message.channel.send(`**${member.displayName}** is unjailed.`)
      
      member.send(`You are now unjailed from **${message.guild.name}**`)
  
    }
  };