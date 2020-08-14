const urban = require('relevant-urban');
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');


const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
   
            name: "urban",
        category: "fun",
        cooldown: 5,
        description: "Get a definition of a word from Urban Dictioanry.",
        accessableby: "everyone",
        run: async(bot, message, args) => {
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
        
        if(!args[0]){
        
            const sembed = new MessageEmbed()
                .setColor(`#faf6f6`)
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**Invalid Operation** <:senbotcross:730967627916378174>  \n> \`\`\`Syntax: ${prefix}urban {query}\n> \n> Usage: Searches for a definition from Urban Dictionary. \`\`\``)
                .setTimestamp()
                return message.channel.send(sembed);
                }

        let image = "http://cdn.marketplaceimages.windowsphone.com/v8/images/5c942bfe-6c90-45b0-8cd7-1f2129c6ePREFIXs_icon_medium";
        try {
            let res = await urban(args.join(' '))
                if (!res) return message.channel.send("No results found for this topic, sorry!");
                let { word, urbanURL, definition, example, thumbsUp, thumbsDown, author } = res;

                let embed = new MessageEmbed()
                    .setColor(`#faf6f6`)
                    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                    .setURL(`${urbanURL}`)
                    .setTitle(`${word}`)
                    .setThumbnail(image)
                    .setDescription(`**Defintion:**\n*${definition || "No definition"}*\n\n**Example:**\n*${example || "No Example"}*`)
                   // .addField('**Rating:**', `**\`👍 ${thumbsUp} | ${thumbsDown} 👎 \`**`)
                   // .addField("**Link**",  `[link to ${word}](${urbanURL})`)
                    .addField("**Author:**", "> " + `${author || "unknown"}`)
                    .setFooter(`👍 ${thumbsUp} | ${thumbsDown} 👎`, 'https://i.imgur.com/0FX9RWm.png' )
                    .setTimestamp()

                message.channel.send(embed)
            
        } catch (e) {
            console.log(e)
            return message.channel.send("\`I couldn't find that defintion! Try something else!\`")
        }
    }

}