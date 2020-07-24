const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
        name: "honkai",
        category: "fun",
        noalias: "None",
        cooldown: 5,
        usage: " ",
        description: "Sends a random image from a Honkai Impact subreddit.",
        accessableby: "everyone",
    run: async (bot, message, args) => {

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