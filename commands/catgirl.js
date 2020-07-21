const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
        name: "catgirl",
        category: "fun",
        noalias: "No Aliases",
        cooldown: 5,
        usage: " ",
        description: "Sends an epic meme",
        accessableby: "everyone",
    run: async (bot, message, args) => {

        const subReddits = ["kemonomimi"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        let color = message.member.displayHexColor;
        if (color == '#000000') color = message.member.hoistRole.hexColor;
        

        const img = await randomPuppy(random);
        const embed = new MessageEmbed()
            .setColor(color)
            .setImage(img)
            .setTitle("Catgirl!")
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embed);
    }
}