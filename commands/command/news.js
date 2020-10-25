const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const { news_API } = require('../../configg')


const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
   
        name: 'news',
        description: 'Replies with the 5 latest world news headlines',
        category: "info",
        usage: " ",
        accessableby: "everyone",
    
    run: async(bot, message, args) => {
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
        
        try {
            const response = await fetch(
                `https://newsapi.org/v2/top-headlines?sources=reuters&pageSize=3&apiKey=${news_API}`
            );
            const json = await response.json();
            const articleArr = json.articles;
            let processArticle = article => {
                const embed = new MessageEmbed()
                    .setColor(`BLACK`)
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