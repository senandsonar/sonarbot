const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
        name: "instastats",
        aliases: ["searchinsta", "sinsta"],
        category: "info",
        description: "Find out some nice instagram statistics",
        usage: "[instagram username]",
        accessableby: "everyone",
    
    run: async (bot, message, args) => {
        let color = message.member.displayHexColor;
        if (color == '#000000') color = message.member.hoistRole.hexColor;
        const name = args.join(" ");

        if (!name) {
        
            const sembed = new MessageEmbed()
                 .setColor(color)
                  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                  .setDescription(`**Invalid Operation** :x:  \n\`\`\`Syntax: ,instastats {instagram username} {reason}\n\nUsage: Shows info about a specific Instagram account. \`\`\``)
                  .setTimestamp()
                return message.channel.send(sembed);
            }

        const url = `https://instagram.com/${name}/?__a=1`;

        let res;

        try {
            res = await fetch(url).then(url => url.json());
        } catch (e) {
            return message.channel.send("I couldn't find that account").then(msg => {
                msg.delete({timeout: 5000})
            })
        }

        const account = res.graphql.user;

        const embed = new MessageEmbed()
            .setColor(color)
            .setTitle(account.full_name)
            .setURL(`https://instagram.com/${name}`)
            .setThumbnail(account.profile_pic_url_hd)
            .setDescription("**Profile information**")
            .addField("**Username**", `${account.username}`)
            .addField("**Full name**", `${account.full_name}`)
            .addField("**Bio**", `${account.biography.length == 0 ? "none" : account.biography}`)
            .addField("**Posts**", `${account.edge_owner_to_timeline_media.count}`)
            .addField("**Followers**", `${account.edge_followed_by.count}`)
            .addField("**Following**", `${account.edge_follow.count}`)
            .addField("**Private account**", `${account.is_private ? "Yes 🔐" : "Nope 🔓"}`);

        message.channel.send(embed);
    }
}