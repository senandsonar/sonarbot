const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");


const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
   
            name: "instastats",
        aliases: ["searchinsta", "sinsta"],
        category: "info",
        description: "Find out some nice instagram statistics",
        accessableby: "everyone",
    
    run: async(bot, message, args) => {
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
        
        const name = args.join(" ");

        if (!name) {
        
            const sembed = new MessageEmbed()
                 .setColor(`BLACK`)
                  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                  .setDescription(`**Invalid Operation** <:senbotcross:730967627916378174>  \n> \`\`\`Syntax: ${prefix}[instastats|searchinsta|sinsta] {instagram username}\n> \n> Usage: Shows info about a specific Instagram account. \`\`\``)
                  .setTimestamp()
                return message.channel.send(sembed);
            }

        const url = `https://instagram.com/${name}/?__a=1`;PREFIX

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
            .setColor(`BLACK`)
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