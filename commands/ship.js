const {MessageEmbed} = require('discord.js')
const fetch = require("node-fetch");
module.exports={
    name: "ship",
    description: "Ships two users.",
    category: "fun",
    run: async(client,message,args)=>{
        
            
        
        //if(!args[0]) return message.channel.send("**Enter Name Of Lover!**")
       // if(!args[1]) return message.channel.send("**Enter Name Of Another Lover!**")
        
        if (args.length == 0){
        
            const sembed = new MessageEmbed()
                 .setColor(`#faf6f6`)
                  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                  .setDescription(`**Invalid Operation** :x:  \n> \`\`\`Syntax: ,ship {member 1} {member 2}\n> \n> Usage: Ships 2 users. \`\`\``)
                  .setTimestamp()
                return message.channel.send(sembed);
                }
        if (args.length == 1){
        
            const sembed = new MessageEmbed()
                 .setColor(`#faf6f6`)
                  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                  .setDescription(`**Invalid Operation** :x:  \n> \`\`\`Syntax: ,ship {member 1} {member 2}\n> \n> Usage: Ships 2 users. \`\`\``)
                  .setTimestamp()
                return message.channel.send(sembed);
                }
        
            let responses=[
                    "5%",
                    "10%",
                    "15%",
                    "20%",
                    "25%",
                    "30%",
                    "35%",
                    "40%",
                    "45%",
                    "50%",
                    "55%",
                    "60%",
                    "65%",
                    "70%",
                    "75%",
                    "80%",
                    "85%",
                    "90%",
                    "95%",
                    "100%",
            ]
            let user =  await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(m => m.user.username.toLowerCase() === args[0].toLowerCase()) || message.guild.members.cache.find(mp => mp.displayName.toLowerCase() === args[0].toLowerCase());
            let user2 =  await message.mentions.members.array()[1] || message.guild.members.cache.get(args[1]) || message.guild.members.cache.find(m => m.user.username.toLowerCase() === args[1].toLowerCase()) || message.guild.members.cache.find(mp => mp.displayName.toLowerCase() === args[1].toLowerCase());
            let response = responses[Math.floor(Math.random()*(responses.length)-1)]
            
            let Embed = new MessageEmbed()
            
           // .addField(`Matching Users!`,"> " + `\n> ${user}  \n> ${user2} \n> \n> Users are a **${response}** match! `)  
           //.setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
           .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
           .addFields(
            { name: `Matching Users :sparkling_heart: `, value: `> **${user}**  \n> **${user2}** \n> \n> Users are a **${response}** match!` },
           )
           // .addField(```${user2}```)
           // .addField(`> Are a **${response}** match!`)
            //.setDescription(`(args.join('  ')` are a **${response}** match!)
            .setColor(`#faf6f6`)
            message.channel.send(Embed)
        }
    }
