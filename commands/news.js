const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const { news_API } = require('../config.json');

module.exports = {
        name: 'news',
        aliases: ['globalnews', 'reuters'],
        description: 'Replies with the 5 latest world news headlines',
        category: "info",
        usage: " ",
        accessableby: "everyone",
    
    run: async (bot, message, args) => {
        let color = message.member.displayHexColor;
        if (color == '#000000') color = message.member.hoistRole.hexColor;
        try {
            const response = await fetch(
                `https://newsapi.org/v2/top-headlines?sources=reuters&pageSize=3&apiKey=${news_API}`
            );
            const json = await response.json();
            const articleArr = json.articles;
            let processArticle = article => {
                const embed = new MessageEmbed()
                    .setColor(color)
                    .setTitle(article.title)
                    .setURL(article.url)
                    .setAuthor(article.author)
                    .setDescription(article.description)
                    .setThumbnail(article.urlToImage)
                    .setTimestamp(article.publishedAt)
                    .setFooter(message.guild.name, message.guild.iconURL());
                return embed;
            };
            async function processArray(array) {
                for (const article of array) {
                    const msg = await processArticle(article);
                    message.channel.send(msg);
                }
            }
            await processArray(articleArr);
        } catch (e) {
            message.channel.send('Something failed along the way');
        }
    }
};