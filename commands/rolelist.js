const { MessageEmbed } = require("discord.js");
const { formatDate } = require("../functions.js");

module.exports = {
        name: "rolelist",
        category: "info",
        aliases:['rlist'],
        cooldown: 8,
        description: "Returns user information",
        usage: "[name | nickname | mention | ID] (optional)",
        accessableby: "everyone",
    
    run: async (bot, message, args) => {
//let member = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
        let color = message.member.displayHexColor;
        if (color == '#000000') color = message.member.hoistRole.hexColor;
       // let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
        
        let roles = message.guild.roles.cache
            .filter(r => r.id !== message.guild.id)
            .map(r => r.name).join("\n") || 'none';
            
    

        const embed = new MessageEmbed()
            .setTitle("Server Role List")
            .setFooter(message.guild.name, message.guild.iconURL())
            .setColor(color)
            .setDescription(`${roles}`)
            .setTimestamp()

       

        message.channel.send(embed);
    }
}