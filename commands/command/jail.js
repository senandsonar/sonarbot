const { MessageEmbed } = require("discord.js");




const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
   
      name: "jail",
  description: "Jail a user.",
  category: "moderation",
  run: async(bot, message, args) => {
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
        
    let muterole = message.guild.roles.cache.find(r => r.name === "Jailed")
    
    
    
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "\`\`\`Sorry but you do not have permission to jail anyone. You require the permission 'MANAGE_ROLES'\`\`\`"
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("\`\`\`I do not have permission to jail anyone. I require the permission 'MANAGE-ROLES'\`\`\`");
    }
   
    //const member = message.mentions.members.first();
    
    if(!args[1]){
        
      const sembed = new MessageEmbed()
          .setColor(`BLACK`)
          .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`**Invalid Operation** <:senbotcross:730967627916378174>  \n> \`\`\`Syntax: ${prefix}jail {member} {reason}\n> \n> Usage: Jails a user. \`\`\``)
          .setTimestamp()
          return message.channel.send(sembed);
          }
    PREFIX
    
    
    let reason = args.slice(1).join(" ")
    
    

    
    if(!reason) {
        
      const sembed = new MessageEmbed()
          .setColor(`BLACK`)
          .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`**Invalid Operation** <:senbotcross:730967627916378174>  \n> \`\`\`Syntax: ${prefix}jail {member} {reason}\n> \n> Usage: Jails a user. \`\`\``)
          .setTimestamp()
          return message.channel.send(sembed);
          }
    PREFIX
    
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase()) || message.member;
    
    if (message.member.roles.cache.has("Jailed")) 
      return message.channel.send("Given User is already jailed.")
    
      if(!muterole) {
      return message.channel.send("This server does not have role with name `Jailed`") 
    }
    
    
    const sembed3 = new MessageEmbed()
    .setColor(`BLACK`)
    .setAuthor(message.guild.name, message.guild.iconURL())
    .addFields(
        { name: `**${member.user.tag} has been jailed.**`, value: '> Successfully sent Jail message. <:senbotcheck:730967576007671929>' },
    )
    .addField(`Jail Assigned By:`, `> ${message.author}`)

    const sembed4 = new MessageEmbed()
    .setColor(`BLACK`)
    .setAuthor(message.guild.name, message.guild.iconURL())
    .addFields(
        { name: `**${member.user.tag} has been jailed.**`, value: '> Failed to send Jail message. <:senbotcross:730967627916378174>' },
    )
    .addField(`Jail Assigned By:`, `> ${message.author}`)
    
    const sembed2 = new MessageEmbed()
    .setColor(`RED`)
    .setTitle('You have been jailed in a server!')
    .setThumbnail(bot.user.displayAvatarURL())
    .addField(`**You Have Been Jailed In:**`, `> ${message.guild.name}`)
    .addField(`**Moderator:**`, `> ${message.author.tag}`)
    .addField(`**Reason:**`, `> ${reason || "None"}`)
    .setFooter(`If you wish to dispute this, go to the jail channel you have been placed in.`)
    
    
    member.roles.add(muterole)
    
    
    await message.channel.send(sembed3)
    
  
    
    member.send(sembed2)
    const jailChannel = message.guild.channels.cache.find(channel => channel.name === 'jail')

      await jailChannel.send(`${member}, you have been jailed. Please speak to a mod in this channel if you wish to be let out early, wish to dispute your sentence, or do not understand why you are here.`)
    
    
    
  }
};