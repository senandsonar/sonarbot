const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

const mongoose = require('mongoose');
const Guild = require('../../models/guild');
const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
        name: "arknights",
        category: "fun",
        cooldown: 5,
        description: "Sends a random image from the artnights subreddit!",
        accessableby: "everyone",
    run: async(bot, message, args) => {
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
        

        const subReddits = ["artknights"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        

        const img = await randomPuppy(random);
        const embed = new MessageEmbed()
            .setColor(`BLACK`)
            .setImage(img)
            .setTitle("Arknights!")
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embed);
    }
}