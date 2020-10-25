const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

const mongoose = require('mongoose');
const Guild = require('../../models/guild');
const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
        name: "kyaru",
        cooldown: 7,
        category: "fun",
        noalias: "None",
        usage: " ",
        description: "Sends an iamge of Kyaru!",
        accessableby: "everyone",
    run: async(bot, message, args) => {
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
        

        const subReddits = ["kyaru"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        
        

        const img = await randomPuppy(random);
        const embed = new MessageEmbed()
            .setColor(`BLACK`)
            .setImage(img)
            .setTitle("Kyaru!")
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embed);
    }
}