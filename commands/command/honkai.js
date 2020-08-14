const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

const mongoose = require('mongoose');
const Guild = require('../../models/guild');
const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
        name: "honkai",
        category: "fun",
        noalias: "None",
        cooldown: 5,
        usage: " ",
        description: "Sends a random image from a Honkai Impact subreddit.",
        accessableby: "everyone",
    run: async(bot, message, args) => {
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
        

        const subReddits = ["houkai3rd"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        
        

        const img = await randomPuppy(random);
        const embed = new MessageEmbed()
            .setColor(`#faf6f6`)
            .setImage(img)
            .setTitle("Image from a Honkai Impact Subreddit!")
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embed);
    }
}