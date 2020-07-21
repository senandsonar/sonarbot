const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
        name: "kyaru",
        cooldown: 7,
        category: "fun",
        noalias: "No Aliases",
        usage: " ",
        description: "Sends an epic meme",
        accessableby: "everyone",
    run: async (bot, message, args) => {

        const subReddits = ["kyaru"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        let color = message.member.displayHexColor;
        if (color == '#000000') color = message.member.hoistRole.hexColor;
        

        const img = await randomPuppy(random);
        const embed = new MessageEmbed()
            .setColor(color)
            .setImage(img)
            .setTitle("Kyaru!")
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embed);
    }
}