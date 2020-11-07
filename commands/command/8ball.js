const {MessageEmbed} = require('discord.js')
const mongoose = require('mongoose');
const Guild = require('../../models/guild');
const { PREFIX } = require('../../configg');


const db = require('quick.db');
module.exports = {
    name: "8ball",
    description: "Plays the 8ball game.",

        
    category: "fun",
    run: async(bot, message, args) => {
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
        
        let question = message.content.slice(7)
        if(!question){
        
            const sembed = new MessageEmbed()
                .setColor(`BLACK`)
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**Invalid Operation** <:senbotcross:730967627916378174>  \n> \`\`\`Syntax: ${prefix}8ball {query}\n> \n> Usage: Plays 8ball. \`\`\``)
                .setTimestamp()
                return message.channel.send(sembed);
                }
        else{
            let responses=[
                    "It is certain.",
                    "It is decidedly so.",
                    "Without a doubt.",
                    "Yes - definitely.",
                    "You may rely on it.",
                    "As I see it, yes.",
                    "Most likely.",
                    "Outlook good.",
                    "Yes.",
                    "Signs point to yes.",
                    "Reply hazy, try again.",
                    "Ask again later.",
                    "Better not tell you now.",
                    "Cannot predict now.",
                    "Concentrate and ask again.",
                    "Don't count on it.",
                    "My reply is no.",
                    "My sources say no.",
                    "Outlook not so good.",
                    "Very doubtful.",
            ]
            let response = responses[Math.floor(Math.random()*(responses.length)-1)]

            let Embed = new MessageEmbed()
            
            .setTitle(`8Ball!`)
            .setDescription(`Question: ${question}\nMy response: ${response}`)
            .setColor(`BLACK`)
            message.channel.send(Embed)
        }
    }
}