const {MessageEmbed} = require('discord.js')
const fetch = require("node-fetch");
module.exports={
    name: "pat",
    description: "There is a big chance I insult you!",
    category: "fun",
    run: async(client,message,args)=>{
      
      //  let user2 =  await message.mentions.members.array()[1] || message.guild.members.cache.get(args[1]) || message.guild.members.cache.find(m => m.user.username.toLowerCase() === args[1].toLowerCase()) || message.guild.members.cache.find(mp => mp.displayName.toLowerCase() === args[1].toLowerCase());
        //if(!args[0]) return message.channel.send("**Enter Name Of Lover!**")
       // if(!args[1]) return message.channel.send("**Enter Name Of Another Lover!**")
       let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase());
        if (!args[0]) return message.channel.send("**Please Enter A Valid User(s)!**")
        
            let color = message.member.displayHexColor;
            if (color == '#000000') color = message.member.hoistRole.hexColor;
            
            let Embed = new MessageEmbed()
            
           // .addField(`Matching Users!`,"> " + `\n> ${user}  \n> ${user2} \n> \n> Users are a **${response}** match! `)  
           //.setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
           .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
           .addFields(
            { name: `*Patting Noises* `, value: `> **${message.author}** patted **${member}** \n> \n> *patpatpat*` },
           )
           .setImage(`https://i.imgur.com/thghuft.gif`)
            // .addField(```${user2}```)
            // .addField(`> Are a **${response}** match!`)
            //.setDescription(`(args.join('  ')` are a **${response}** match!)
            .setColor(color)
            message.channel.send(Embed)
        }
    }