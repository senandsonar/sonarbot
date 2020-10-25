const { MessageEmbed } = require("discord.js");


const mongoose = require('mongoose');
const Guild = require('../../models/guild');
const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
        name: "say",
        category: "fun",
        noalias: [''],
        description: "Says your input via the bot",
        usage: "[text]",
        cooldown: 10,
        accessableby: "everyone",
    
    run: async(bot, message, args) => {
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
        
        
      try {
        if (args.length === 0)
            return message.channel.send("**Enter Some Text!**")
        message.delete({ timeout: 1000 })

        const embed = new MessageEmbed()
            .setDescription(args.join(" "))
            .setColor(`BLACK`);

        message.channel.send(embed)
      } catch (e) {
          throw e;
      };
  }
};