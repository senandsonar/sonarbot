const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

const mongoose = require('mongoose');
const Guild = require('../../models/guild');
module.exports={
        name: "catgirl",
        category: "fun",
        noalias: "None",
        cooldown: 5,
        usage: " ",
        description: "Sends an image of a catgirl!",
        accessableby: "everyone",
    run: async (bot, message, args) => {
        const settings = await Guild.findOne({
          guildID: message.guild.id
        }, (err, guild) => {
          if (err) console.error(err)
        })

        const subReddits = ["kemonomimi"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        
        

        const img = await randomPuppy(random);
        const embed = new MessageEmbed()
            .setColor(`#faf6f6`)
            .setImage(img)
            .setTitle("Catgirl!")
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embed);
    }
}