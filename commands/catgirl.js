const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
        name: "catgirl",
        category: "fun",
        noalias: "No Aliases",
        usage: " ",
        description: "Sends an epic meme",
        accessableby: "everyone",
    run: async (bot, message, args) => {

        const subReddits = ["cutelittlefangs"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setTitle("Catgirl!")
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embed);
    }
}