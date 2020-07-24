const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
        name: "catgirl",
        category: "fun",
        noalias: "None",
        cooldown: 5,
        usage: " ",
        description: "Sends an image of a catgirl!",
        accessableby: "everyone",
    run: async (bot, message, args) => {

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