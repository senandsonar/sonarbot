const {MessageEmbed} = require('discord.js')
module.exports={
    name: "gay",
    description: "Shows how gay you are.",
    cooldown: 5,
    category: "fun",
    run: async(client,message,args)=>{
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
        let question = message.content.slice(7)
        if (args.length == 2){
        
        
            const sembed = new MessageEmbed()
                .setColor(`#faf6f6`)
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**Invalid Operation** :x:  \n> \`\`\`Syntax: ,gay\n> \n> Usage: Shows how gay you are. \`\`\``)
                .setTimestamp()
                return message.channel.send(sembed);
                }
        else{
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
            let response = responses[Math.floor(Math.random()*(responses.length)-1)]

            let Embed = new MessageEmbed()
            
            .setAuthor(`Gay Measurement`, user.user.displayAvatarURL({ dynamic: true }))
            .setDescription(`${user.user.username} is ${response} gay. :rainbow_flag: `)
            .setColor(`#faf6f6`)
            message.channel.send(Embed)
        }
    }
}