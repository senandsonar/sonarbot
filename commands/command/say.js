const { MessageEmbed } = require("discord.js");


const mongoose = require('mongoose');
const Guild = require('../../models/guild');
module.exports={
        name: "say",
        category: "fun",
        noalias: [''],
        description: "Says your input via the bot",
        usage: "[text]",
        cooldown: 10,
        accessableby: "everyone",
    
    run: async (bot, message, args) => {
        const settings = await Guild.findOne({
          guildID: message.guild.id
        }, (err, guild) => {
          if (err) console.error(err)
        })
        
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