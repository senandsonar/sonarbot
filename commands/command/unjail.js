const { MessageEmbed } = require("discord.js");

const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
   
        name: "unjail",
    category: "moderation",
    run: async (client, message, args) => 
  {
      
      
      if (!message.member.hasPermission("MANAGE_ROLES")) {
        return message.channel.send(
          "\`\`\`Sorry but you do not have permission to unjail anyone. You require the permission 'MANAGE_ROLES'\`\`\`"
        );
      }
  
      if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
        return message.channel.send("\`\`\`I do not have permission to unjail members. I require the permissions 'MANAGE_ROLES'\`\`\`");
      }
  
      //const user = message.mentions.members.first();
  
      if (!args[0]) {
        
        const sembed = new MessageEmbed()
            .setColor(`BLACK`)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`**Invalid Operation** <:senbotcross:730967627916378174>  \n> \`\`\`Syntax: ${prefix}unjail {member}\n> \n> Usage: Unjails a user. \`\`\``)
            .setTimestamp()
            return message.channel.send(sembed);
            }
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase()) || message.member;  
  let muterole = message.guild.roles.cache.find(r => r.name === "Jailed")
      
      
   if(member.roles.cache.has(muterole)) {
        return message.channel.send("This member isn't Jailed!")
      }
      
      
      member.roles.remove(muterole)
      
      await message.channel.send(`Done.`)
      
      
  
    }
  };