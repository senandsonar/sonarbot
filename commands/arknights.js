const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
        name: "arknights",
        category: "fun",
        cooldown: 5,
        description: "Sends a random image from the artnights subreddit!",
        accessableby: "everyone",
    run: async (bot, message, args) => {

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