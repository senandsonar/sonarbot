const { MessageEmbed } = require('discord.js');

module.exports = {
    
        name: "post",
        description: "polling",
        category: "info",
        usage: "[question]",
        cooldown: 10,
        noalias: "No Aliases",
        accessableby: "Administrator",
    
    run: async (bot, message, args) => {
        if (!message.member.hasPermission('SEND_MESSAGES')) return message.channel.send("**You Do Not Have Sufficient Permissions! - [SEND_MESSAGES]**");
        let color = message.member.displayHexColor;
        if (color == '#000000') color = message.member.hoistRole.hexColor;
        if (args.length == 0){ 
        
            const sembed = new MessageEmbed()
                 .setColor(color)
                  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                  .setDescription(`**Invalid Operation** :x:  \n> \`\`\`Syntax: ,post {post description}\n> \n> Usage: Makes a reddit-style post. \`\`\``)
                  .setTimestamp()
                return message.channel.send(sembed);
                }

        const embed = new MessageEmbed()
            .setColor(color)
            .setAuthor(message.member.displayName, message.author.displayAvatarURL())
            .addField(`New Post in  ${message.channel.name} 📰 `,"*> " + (args.join('  ') + "* ")  )
        var msg = await message.channel.send(embed);
        message.delete({ timeout: 3000 });
        await msg.react('728960552558264327');
        await msg.react('728960499584204811');
  },
}

