const { MessageEmbed } = require("discord.js");

const { formatDate } = require("../../functions.js");
const { PREFIX } = require('../../configg');
const db = require('quick.db');

module.exports = {
   
            name: 'roleinfo',
        category: "info",
        cooldown: 5,
        aliases: ["rinfo"],
        description: "shows stats of the mentioned role",
        usage: "[role name | role mention | ID]",
        accessableby: 'everyone',
    
    run: async(bot, message, args) => {
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
        
        if (args.length == 0){
        
            const sembed = new MessageEmbed()
                 .setColor(`#faf6f6`)
                  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                  .setDescription(`**Invalid Operation** <:senbotcross:730967627916378174>  \n> \`\`\`Syntax: ${prefix}[roleinfo|rrinfo] {role name}\n> \n> Usage: Shows info of a specific role.\`\`\``)
                  .setTimestamp()
                return message.channel.send(sembed);
                }
        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());
        if (!role){PREFIX
        
            const sembed = new MessageEmbed()
                 .setColor(`#faf6f6`)
                  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                  .setDescription(`**Invalid Operation** <:senbotcross:730967627916378174>  \n> \`\`\`Syntax: ${prefix}[roleinfo|rrinfo] {role name}\n> \n> Usage: Shows info of a specific role.\`\`\``)
                  .setTimestamp()
                return message.channel.send(sembed);
                }
        const status = {
            false: "No",
            true: "Yes"
        }
        const today = Date.now()
       
        const createdd = formatDate(role.createdAt)
        const created = role.createdAt
       
        
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        var d = new Date(); 
       
        const diffDays = Math.round(Math.abs((today - created) / oneDay));
       
        let roleembed = new MessageEmbed()
            .setColor(`${role.hexColor}`)
            .setAuthor("Role Info")
            .setThumbnail(message.guild.iconURL())
            .addField("**Role ID**", `\`${role.id}\``, false)
            .addField("**Name**", role.name, false)
            .addField("**Hex**", role.hexColor)
            .addField("**Mentionable**", status[role.mentionable])
            .addField(`**Users with role**`, `\`${role.members.size}\``)
            .addField(`**Role Created At**`, `${createdd} **(${diffDays} days ago)**`)
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()

        message.channel.send(roleembed);
    }
}