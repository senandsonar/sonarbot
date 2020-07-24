const { MessageEmbed } = require("discord.js");


module.exports = {
        name: "say",
        category: "fun",
        noalias: [''],
        description: "Says your input via the bot",
        usage: "[text]",
        cooldown: 10,
        accessableby: "everyone",
    
    run: async (bot, message, args) => {
        
      try {
        if (args.length === 0)
            return message.channel.send("**Enter Some Text!**")
        message.delete({ timeout: 1000 })

        const embed = new MessageEmbed()
            .setDescription(args.join(" "))
            .setColor(`#faf6f6`);

        message.channel.send(embed)
      } catch (e) {
          throw e;
      };
  }
};