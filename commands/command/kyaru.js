const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

const mongoose = require('mongoose');
const Guild = require('../../models/guild');
module.exports={
        name: "kyaru",
        cooldown: 7,
        category: "fun",
        noalias: "None",
        usage: " ",
        description: "Sends an iamge of Kyaru!",
        accessableby: "everyone",
    run: async (bot, message, args) => {
        const settings = await Guild.findOne({
          guildID: message.guild.id
        }, (err, guild) => {
          if (err) console.error(err)
        })

        const subReddits = ["kyaru"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        
        

        const img = await randomPuppy(random);
        const embed = new MessageEmbed()
            .setColor(`#faf6f6`)
            .setImage(img)
            .setTitle("Kyaru!")
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embed);
    }
}