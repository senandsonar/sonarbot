const urban = require('relevant-urban');
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
        name: "urban",
        aliases: ["define"],
        category: "fun",
        description: "Give information about urban words!",
        usage: "[word]",
        accessableby: "everyone",
        run: async(bot,message,args)=>{
        let color = message.member.displayHexColor;
        if (color == '#000000') color = message.member.hoistRole.hexColor;
        if(!args[0]){
        
            const sembed = new MessageEmbed()
                .setColor(color)
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**Invalid Operation** :x:  \n\`\`\`Syntax: ,urban {query} {reason}\n\nUsage: Searches for a definition from Urban Dictionary. \`\`\``)
                .setTimestamp()
                return message.channel.send(sembed);
                }

        let image = "http://cdn.marketplaceimages.windowsphone.com/v8/images/5c942bfe-6c90-45b0-8cd7-1f2129c6e319?imageType=ws_icon_medium";
        try {
            let res = await urban(args.join(' '))
                if (!res) return message.channel.send("No results found for this topic, sorry!");
                let { word, urbanURL, definition, example, thumbsUp, thumbsDown, author } = res;

                let embed = new MessageEmbed()
                    .setColor(color)
                    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                    .setURL(`${urbanURL}`)
                    .setTitle(`${word}`)
                    .setThumbnail(image)
                    .setDescription(`**Defintion:**\n*${definition || "No definition"}*\n\n**Example:**\n*${example || "No Example"}*`)
                   // .addField('**Rating:**', `**\`👍 ${thumbsUp} | ${thumbsDown} 👎 \`**`)
                   // .addField("**Link**",  `[link to ${word}](${urbanURL})`)
                    .addField("**Author:**", `${author || "unknown"}`)
                    .setFooter(`👍 ${thumbsUp} | ${thumbsDown} 👎`, 'https://i.imgur.com/0FX9RWm.png' )
                    .setTimestamp()

                message.channel.send(embed)
            
        } catch (e) {
            console.log(e)
            return message.channel.send("\`I couldn't find that defintion! Try something else!\`")
        }
    }

}