const { MessageEmbed } = require("discord.js");


module.exports = {
        name: "say",
        category: "fun",
        noalias: [''],
        description: "Says your input via the bot",
        usage: "[text]",
        accessableby: "everyone",
    
    run: async (bot, message, args) => {
        let color = message.member.displayHexColor;
        if (color == '#000000') color = message.member.hoistRole.hexColor;
      try {
        if (args.length === 0)
            return message.channel.send("**Enter Some Text!**")
        message.delete({ timeout: 1000 })

        const embed = new MessageEmbed()
            .setDescription(args.join(" "))
            .setColor(color);

        message.channel.send(embed)
      } catch (e) {
          throw e;
      };
  }
};