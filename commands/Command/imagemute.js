const { MessageEmbed } = require("discord.js");



const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
   
      name: "imagemute",
  aliases: ['imute'],
  description: "Mute anyone who break rules",
  category: "moderation",
  run: async (client, message, args) => 
  {
    let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
   
  let channel = message.channel;
  let roles = message.guild.roles; // collection
  
  
  //const adminRole = message.guild.roles.cache.find(r => r.name === 'Admin');
  if (!message.member.hasPermission("MANAGE_ROLES")) {
    return message.channel.send(
      "\`\`\`Sorry but you do not have permission to mute anyone. You require the permission 'MANAGE_ROLES'\`\`\`"
    );
  }

  if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
    return message.channel.send("\`\`\`I do not have permission to mute anyone. I require the permission 'MANAGE_ROLES'\`\`\`");
  }

  if (args.length == 0){ 
        
    const sembed = new MessageEmbed()
         .setColor(`#faf6f6`)
          .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`**Invalid Operation** <:senbotcross:730967627916378174>  \n> \`\`\`Syntax: ${prefix}imagemute/imute {member}\n> \n> Usage: Disables a users image perms.\n> \n> Note: If a user is already image muted (file perms) this command will not work.\n> \n> Note 2: Use ${prefix}unmute to return both image and message perms. \`\`\``)
          .setTimestamp()
        return message.channel.send(sembed);
        }

   

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase()) || message.member;
  // overwrites 'SEND_MESSAGES' role, only on this specific channel
  if (channel.permissionOverwrites.get(member.id, { ATTACH_FILES: false })){
    const sembed = new MessageEmbed()
      .setColor(`#faf6f6`)
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`**${member.user.tag} Already image muted or is unable to view this channel!** <:senbotcross:730967627916378174> `)
    
    //.setFooter(``)
     
  return message.channel.send(sembed)
    }
  


  channel.updateOverwrite(member.id, { ATTACH_FILES: false });

const sembed = new MessageEmbed()
    .setColor(`#faf6f6`)
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
   // .setDescription(`**${member}** Muted <:senbotcheck:730967576007671929>`)
    .addField(`**${member.user.tag}** Image Muted In \`#${channel.name}\`<:senbotcheck:730967576007671929>`, `> Image perms have been revoked.`)
    .addField(`Image Perms Removed By:`, `> ${message.author}`)
   // .setFooter(``)
     
  message.channel.send(sembed)
  
    
   
      
    
}}