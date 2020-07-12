const { MessageEmbed } = require("discord.js");



module.exports = {
  name: "revealchannel",
  description: "Mute anyone who break rules",
  category: "moderation",
  usage: "mute <@mention>",
  run: async (client, message, args) => 
  {
    let color = message.member.displayHexColor;
    if (color == '#000000') color = message.member.hoistRole.hexColor;
  let channel = message.channel;
  let roles = message.guild.roles; // collection
  
  
  //const adminRole = message.guild.roles.cache.find(r => r.name === 'Admin');
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    return message.channel.send(
      "Sorry but you do not have permission to reveal channels. You require the permission 'ADMINISTRATOR"
    );
  }

  if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
    return message.channel.send("I do not have sufficient permissions. - MANAGE_ROLES ");
  }

  if (args.length == 1){ 
        
    const sembed = new MessageEmbed()
         .setColor(color)
          .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`**Invalid Operation** :x:  \n\`\`\`Syntax: ,revealchannel\n\nUsage: reveals a channel to everyone. \`\`\``)
          .setTimestamp()
        return message.channel.send(sembed);
        }

   

    //let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase()) || message.member;
  // overwrites 'SEND_MESSAGES' role, only on this specific channel
 
     
 
  


channel.updateOverwrite(channel.guild.roles.everyone, { VIEW_CHANNEL: null });

const sembed = new MessageEmbed()
    .setColor(color)
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
   // .setDescription(`**${member}** Muted ✅`)
    .addField(`**Channel Revealed To Everyone!** ✅`, `> View perms have been given ✅`)
    .setTimestamp()
     
  message.channel.send(sembed)
}}