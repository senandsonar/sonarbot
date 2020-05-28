const Discord = require('discord.js');
module.exports = {
    name : 'unban',
    execute(client, message, args){

   if(!message.member.hasPermission("BAN_MEMBERS"))return message.channel.send("You dont have the permission")

   let member = client.users.cache.get(args[0]);
   if(!member)return message.channel.send("Input a valid id")
 
if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("I dont have permission")

message.guild.members.unban(member.id);
return message.channel.send(`**${member.tag}** Has been unbanned :white_check_mark: `)
}
}