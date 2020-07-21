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
                  .setDescription(`**Invalid Operation** :x:  \n> \`\`\`Syntax: ,[instastats|searchinsta|sinsta] {instagram username}\n> \n> Usage: Shows info about a specific Instagram account. \`\`\``)
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
            .addField("__Username__", `${account.username}`)
            .addField("__Full name__", `${account.full_name}`)
            .addField("__Bio__", `${account.biography.length == 0 ? "none" : account.biography}`)
            .addField("__Posts__", `${account.edge_owner_to_timeline_media.count}`)
            .addField("__Followers__", `${account.edge_followed_by.count}`)
            .addField("__Following__", `${account.edge_follow.count}`)
            .addField("__Private account__", `${account.is_private ? "Yes 🔐" : "Nope 🔓"}`);

        message.channel.send(embed);
    }
}