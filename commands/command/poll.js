const { MessageEmbed } = require('discord.js');


const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
   
        
        name: "poll",
        description: "polling",
        category: "info",
        cooldown: 8,
        noalias: "None",
        accessableby: "Administrator",
    
    run: async(bot, message, args) => {
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
        if (!message.member.hasPermission('SEND_MESSAGES')) return message.channel.send("\`\`\`You Do Not Have Sufficient Permissions! - [SEND_MESSAGES]\`\`\`");
        
        if (args.length == 0){ 
        
            const sembed = new MessageEmbed()
                 .setColor(`BLACK`)
                  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                  .setDescription(`**Invalid Operation** <:senbotcross:730967627916378174>  \n> \`\`\`Syntax: ${prefix}poll {query}\n> \n> Usage: Starts a poll. \`\`\``)
                  .setTimestamp()
                return message.channel.send(sembed);
                }
            




        const embd = new MessageEmbed()
            .setColor(`BLACK`)
            .setAuthor(message.member.displayName, message.author.displayAvatarURL())
            .addField(`Poll started in  ${message.channel.name} 📊 `,"*> " + (args.join('  ') + "* ")  )
            .addField(`Yes: 1`)
            .addField(`No: 1`)
        message.delete({ timeout: 3000 });

        message.channel.send(embd).then(embdReact => {
            embdReact.react('730967576007671929');
            embdReact.react('730967627916378174');

        })}}