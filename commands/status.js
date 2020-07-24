const { MessageEmbed } = require('discord.js');

module.exports={
        name: "status",
        category: "fun",
        noalias: [""],
        cooldown: 5,
        description: "Shows the status of a user.",
        usage: " ",
        accessableby: "everyone",

    run: async (bot, message, args) => {

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
        
        if (!user.presence.activities.length) {
            const sembed = new MessageEmbed()
                .setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
                .setColor(`#faf6f6`)
                .setThumbnail(user.user.displayAvatarURL())
                .addField("**No Status**", 'This user does not have any custom status!')
                .setFooter(message.guild.name, message.guild.iconURL())
                .setTimestamp()
            message.channel.send(sembed)
            return undefined;
        }

        user.presence.activities.forEach((activity) => {

            if (activity.type === 'CUSTOM_STATUS') {
                const embed = new MessageEmbed()
                    .setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
                    .setColor(`#faf6f6`)
                    .addField("**Status**", `**Custom status** -\n${activity.emoji || "No Emoji"} | ${activity.state}`)
                    .setFooter(message.guild.name, message.guild.iconURL())
                    .setTimestamp()
                message.channel.send(embed)
            }
            else if (activity.type === 'PLAYING') {
                let name1 = activity.name
                let details1 = activity.details
                let state1 = activity.state
                let image = user.user.displayAvatarURL({ dynamic: true })

                const sembed = new MessageEmbed()
                    .setAuthor(`${user.user.username}'s Activity`)
                    .setColor(`#faf6f6`)
                    .setThumbnail(image)
                    .addField("**Type**", "Playing")
                    .addField("**Application**", `${name1}`)
                    .addField("**Details**", `${details1 || "No Details"}`)
                    .addField("**Extras**", `${state1 || "No Details"}`)
                message.channel.send(sembed);
            }
        })
    }
}