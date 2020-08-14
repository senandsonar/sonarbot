const { MessageEmbed } = require('discord.js');


const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
   
            name: "rolememberinfo",
        aliases: ['rminfo'],
        category: "info",
        cooldown: 5,
        description: "Shows List Of Members Having A Role",
        usage: "[role name | role mention | ID]",
        accessableby: "everyone",
    run: async(bot, message, args) => {
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
        if (args.includes("@everyone")) return;
        
        if (args.includes("@here")) return;

        

        if (args.length == 0){
        
            const sembed = new MessageEmbed()
                 .setColor(`#faf6f6`)
                  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                  .setDescription(`**Invalid Operation** <:senbotcross:730967627916378174>  \n> \`\`\`Syntax: ${prefix}[rolememberinfo|rminfo] {role name}\n> \n> Usage: Shows a list of user's who have a specific role.\`\`\``)
                  .setTimestamp()
                return message.channel.send(sembed);
                }

                let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());

        if (!role){
        
            const sembed = new MessageEmbed()
                 .setColor(`#faf6f6`)
                  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                  .setDescription(`**Invalid Operation** <:senbotcross:730967627916378174>  \n> \`\`\`Syntax: ${prefix}[rolememberinfo|rminfo] {role name}\n> \n> Usage: Shows a list of user's who have a specific role.\`\`\``)
                  .setTimestamp()
                return message.channel.send(sembed);
                }

        let membersWithRole = message.guild.members.cache.filter(member => {PREFIX
            return member.roles.cache.find(r => r.name === role.name);
        }).map(member => {
            return member.user.tag;
        })
        if (membersWithRole > 2048) return message.channel.send('**List Is Too Long!**')

        let roleEmbed = new MessageEmbed()
            .setColor(`#faf6f6`)
            .setThumbnail(message.guild.iconURL())
            .setTitle(`Users With The ${role.name} Role!`)
            .setDescription(membersWithRole.join("\n"));
        message.channel.send(roleEmbed);
    }
}