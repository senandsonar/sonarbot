const {MessageEmbed} = require('discord.js')
const fetch = require("node-fetch");

const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
   
        name: "ship",
    description: "Ships two users.",
    category: "fun",
    cooldown: 5,
    run: async(bot, message, args) => {
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
        let reason1 = args.splice(1).join(" ")
        let reason2 = args.join(" ")
        
            
        
        if (args.length == 0){
        
            const sembed = new MessageEmbed()
                 .setColor(`BLACK`)
                  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                  .setDescription(`**Invalid Operation** <:senbotcross:730967627916378174>  \n> \`\`\`Syntax: ${prefix}ship {word 1} {word 2}\n> \n> Usage: Ships 2 users. \`\`\``)
                  .setTimestamp()
                return message.channel.send(sembed);
                }
        
        PREFIX
        
            
           // let user =  await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(m => m.user.username.toLowerCase() === args[0].toLowerCase()) || message.guild.members.cache.find(mp => mp.displayName.toLowerCase() === args[0].toLowerCase());
            //let user2 =  await message.mentions.members.array()[1] || message.guild.members.cache.get(args[1]) || message.guild.members.cache.find(m => m.user.username.toLowerCase() === args[1].toLowerCase()) || message.guild.members.cache.find(mp => mp.displayName.toLowerCase() === args[1].toLowerCase());
            
            var randomnumber=Math.floor(Math.random()*101);
            
            let Embed = new MessageEmbed()
            
           // .addField(`Matching Users!`,"> " + `\n> ${user}  \n> ${user2} \n> \n> Users are a **${response}** match! `)  
           //.setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
           .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
           .addFields(
            { name: `Matching Users :sparkling_heart: `, value: `> **${reason2},**  \n> **${reason1}** \n> \n> Users are a **${randomnumber}\%** match!` },
           )
           // .addField(```${user2}```)
           // .addField(`> Are a **${response}** match!`)
            //.setDescription(`(args.join('  ')` are a **${response}** match!)
            .setColor(`BLACK`)
            message.channel.send(Embed)
        }
    }
