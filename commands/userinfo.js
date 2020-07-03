const { MessageEmbed } = require("discord.js");
const { formatDate } = require("../functions.js");

module.exports = {
        name: "userinfo",
        category: "info",
        aliases: ["who", "user", "userinfo"],
        description: "Returns user information",
        usage: "[name | nickname | mention | ID] (optional)",
        accessableby: "everyone",
    
    run: async (bot, message, args) => {
        let member = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
      
        if(!member)
        return message.channel.send("**Enter A Valid User!**");
      
        const joined = formatDate(member.joinedAt);
        const roles = member.roles.cache
            .filter(r => r.id !== message.guild.id)
            .map(r => r.name).join(", ") || 'none';
        const created = formatDate(member.user.createdAt);

        const embed = new MessageEmbed()
            .setTitle("User Info")
            .setFooter(message.guild.name, message.guild.iconURL())
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true}))
            .setColor("GREEN")
            .addField("ID ","`" + ` ${member.user.id} `+"`")
            //.addField("**ID**", `${member.user.id}`)
            .addField("**Name**", `${member.user.tag}`, )
            //.addField("**Account Created**", `${created}`)
            .addField("**Created At**", `${message.user.createdAt}`)
            .addField("**Joined On**", `${joined}`)
            .addField("**Role List**", `${roles}`, true)
            .setTimestamp()

            member.presence.activities.forEach((activity) => {
        if (activity.type === 'PLAYING') {
            embed.addField('Currently playing',`\n**${activity.name}**`)
        }
            })

        message.channel.send(embed);
    }
}