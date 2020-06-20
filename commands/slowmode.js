const Discord = require('discord.js');

module.exports={
    name: "slowmode",
    category:"utility",
    description:"Set the slowmode for the channel!",
    run: async(bot,message,args)=>{
        if(!message.member.hasPermission("ADMINISTRATOR"))return message.channel.send("You dont have admin!")
        if(!args[0])return message.channel.send(`You did not specify the time in seconds you wish to set this channel's slow mode too!`)
        if(isNaN(args[0]))return message.channel.send(`That is not a number!`)
        let reason = message.content.slice(12)
     if(!message.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send("I dont have permission.")
        if(!reason){
            reason=="No reason provided!"
        }
        message.channel.setRateLimitPerUser(args[0],reason)
        message.channel.send(`Set the slowmode of this channel to **${args[0]}** with the reason: **${reason}**`)
    }
}