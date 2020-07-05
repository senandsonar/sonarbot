const { MessageEmbed } = require('discord.js');

module.exports = {
    
        name: "post",
        description: "polling",
        category: "info",
        usage: "[question]",
        noalias: "No Aliases",
        accessableby: "Administrator",
    
    run: async (bot, message, args) => {
        if (!message.member.hasPermission('SEND_MESSAGES')) return message.channel.send("**You Do Not Have Sufficient Permissions! - [SEND_MESSAGES]**");
        let color = message.member.displayHexColor;
        if (color == '#000000') color = message.member.hoistRole.hexColor;
        if (!args[0])
            return message.channel.send("**Please Enter A Query!**");

        const embed = new MessageEmbed()
            .setColor(color)
            .setAuthor(message.member.displayName, message.author.displayAvatarURL())
            .addField(`New Post in  ${message.channel.name} 📰 `,"*> " + (args.join('  ') + "* ")  )
        var msg = await message.channel.send(embed);
        message.delete({ timeout: 3000 });
    await msg.react('⬆');
    await msg.react('⬇');
  },
}

