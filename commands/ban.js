const Discord = require('discord.js');
module.exports = {
    name : 'ban',
    execute(client, message, args){
        let member = message.mentions.members.first()
        if(!member) return message.channel.send("You need to mention a member to ban")
        let reason;
        let arg = message.content.split(" ").slice(2)
        if(arg.length == 0){
            reason = "No reason specified"
        }else{
            reason = arg.join(' ')
        }
        if(!message.member.hasPermission("BAN_MEMBERS"))return message.channel.send("You dont have the right permission")
        if(!message.guild.member(member).bannable)return message.channel.send("I cant ban that user")
   
        message.guild.member(member).ban().then(()=>{
        message.channel.send(`${member.user.tag} has been banned :white_check_mark: `)
    })
    }
}