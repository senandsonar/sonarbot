const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

const mongoose = require('mongoose');
const Guild = require('../../models/guild');
module.exports={
        name: "arknights",
        category: "fun",
        cooldown: 5,
        description: "Sends a random image from the artnights subreddit!",
        accessableby: "everyone",
    run: async (bot, message, args) => {
        const settings = await Guild.findOne({
          guildID: message.guild.id
        }, (err, guild) => {
          if (err) console.error(err)
        })

        const subReddits = ["artknights"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        

        const img = await randomPuppy(random);
        const embed = new MessageEmbed()
            .setColor(`#faf6f6`)
            .setImage(img)
            .setTitle("Arknights!")
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embed);
    }
}