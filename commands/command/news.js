const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const { news_API } = require('../../config.json');

const mongoose = require('mongoose');
const Guild = require('../../models/guild');
module.exports={
        name: 'news',
        aliases: ['globalnews', 'reuters'],
        description: 'Replies with the 5 latest world news headlines',
        category: "info",
        usage: " ",
        accessableby: "everyone",
    
    run: async (bot, message, args) => {
        const settings = await Guild.findOne({
          guildID: message.guild.id
        }, (err, guild) => {
          if (err) console.error(err)
        })
        
        try {
            const response = await fetch(
                `https://newsapi.org/v2/top-headlines?sources=reuters&pageSize=3&apiKey=${news_API}`
            );
            const json = await response.json();
            const articleArr = json.articles;
            let processArticle = article => {
                const embed = new MessageEmbed()
                    .setColor(`#faf6f6`)
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