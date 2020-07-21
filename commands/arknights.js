const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
        name: "arknights",
        category: "fun",
        usage: " ",
        cooldown: 5,
        description: "Sends an epic meme",
        accessableby: "everyone",
    run: async (bot, message, args) => {

        const subReddits = ["artknights"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        let color = message.member.displayHexColor;
        if (color == '#000000') color = message.member.hoistRole.hexColor;

        const img = await randomPuppy(random);
        const embed = new MessageEmbed()
            .setColor(color)
            .setImage(img)
            .setTitle("Arknights!")
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embed);
    }
}