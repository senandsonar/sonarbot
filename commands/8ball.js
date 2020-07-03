const {MessageEmbed} = require('discord.js')
module.exports={
    name: "8ball",
    description: "There is a big chance I insult you!",
    category: "fun",
    run: async(client,message,args)=>{
        let question = message.content.slice(7)
        if(!question)return message.channel.send(`You did not specify your question!`)
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
                    "Very doubtful."
            ]
            let response = responses[Math.floor(Math.random()*(responses.length)-1)]
            let Embed = new MessageEmbed()
            .setTitle(`8Ball!`)
            .setDescription(`Question: ${question}\nMy response: ${response}`)
            .setColor(`GREEN`)
            message.channel.send(Embed)
        }
    }
}