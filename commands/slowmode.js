const { MessageEmbed } = require('discord.js');

module.exports={
    name: "slowmode",
    category:"utility",
    description:"Set the slowmode for the channel!",
    run: async(bot,message,args)=>{
        let color = message.member.displayHexColor;
        if (color == '#000000') color = message.member.hoistRole.hexColor;
        if(!message.member.hasPermission("ADMINISTRATOR"))return message.channel.send("You dont have the permission - ADMINISTRATOR")
        if(!args[0]){ 
        
            const sembed = new MessageEmbed()
                 .setColor(color)
                  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                  .setDescription(`**Invalid Operation** :x:  \n\`\`\`Syntax: ,slowmode {slowmode interval(seconds)} {reason}\n\nUsage: Sets a channels slowmode. \`\`\``)
                  .setTimestamp()
                return message.channel.send(sembed);
                }
        
        if(isNaN(args[0]))return message.channel.send(`That is not a number!`)
        let reason = message.content.slice(12)
     if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("I dont have permission.")
        if(!reason){ 
        
            const sembed = new MessageEmbed()
                 .setColor(color)
                  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                  .setDescription(`**Invalid Operation** :x:  \n\`\`\`Syntax: ,slowmode {slowmode interval(seconds)} {reason}\n\nUsage: Sets a channels slowmode. \`\`\``)
                  .setTimestamp()
                return message.channel.send(sembed);
                }
        
        message.channel.setRateLimitPerUser(args[0],reason)
        //message.channel.send(`Set the slowmode of this channel to **${args[0]}** with the reason: **${reason}**`)
        const sembed = new MessageEmbed()
                 .setColor(color)
                  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                  .addField(`Slowmode Set! ✅`, `> Set the slowmode of this channel to **${args[0]}** for: **${reason}**`)
                  .setTimestamp()
                return message.channel.send(sembed);
                }
    }
