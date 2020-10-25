const { MessageEmbed } = require("discord.js");


const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
   
      name: "role",
  description: "A role utility command",
  category: "utility",
  run: async(bot, message, args) => {
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
    
    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.channel.send(
      `You do not have administrator! ${message.author}`
    );

      if (args.length == 0){
        
        const sembed = new MessageEmbed()
             .setColor(`BLACK`)
              .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
              .setDescription(`**Invalid Operation** <:senbotcross:730967627916378174>  \n> \`\`\`Syntax: ${prefix}role create {color in hex} {name}\n> \n> Syntax 2: ,role delete {name|id}\n> \n> Usage: Creates or deletes a role. \`\`\``)
              .setTimestamp()
            return message.channel.send(sembed);
            }
      if(message.content.includes("create")){
      let rName = message.content.split(`${prefix}role create `).join("");
      let rColor;
      args.forEach((arg) => {
        if (arg.startsWith("#")) {
          rColor = arg;
        }
      });
      if (!rName) {
      if (!rColor) {
            const sembed = new MessageEmbed()
            .setColor(`BLACK`)
             .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
             .setDescription(`**Invalid Operation** <:senbotcross:730967627916378174>  \n> \`\`\`Syntax: ${prefix}role create {color in hex} {name}\n> \n> Syntax 2: ,role delete {name|id}\n> \n> Usage: Creates or deletes a role. \`\`\``)
             .setTimestamp()
           return message.channel.send(sembed);
           }
        
      }
      if (rColor >= 16777215)
        return message.channel.send(
          `That hex color range was too big! Keep it between 0 and 16777215`
        );
      if (rColor <= 0)
        return message.channel.send(
          `That hex color range was too small! Keep it between 0 and 16777215`
        );
      rName = rName.replace(`${rColor}`, ``);
      let rNew = await message.guild.roles.create({
        data: {
          name: rName,
          color: rColor,
        },
      });
      const Embed = new MessageEmbed()
        .setTitle(`Role Created!`)
        .addField(`${message.author.username} has created the role \`${rName}\``, `\n> Its Hex Color Code: \`${rColor}\`\n> Its ID: \`${rNew.id}\``)
        .setColor(rColor);
      message.channel.send(Embed);
    } else if (message.content.includes("delete")){
      let roleDelete =
        message.guild.roles.cache.get(args[1]) ||
        message.guild.roles.cache.find((r) => r.name == args[1]);
      if (!roleDelete)
        return message.channel.send(
          `**You did not specify the name or id of the role you wish to delete, or this role doesn't exist.**`
        );
      roleDelete.delete();
      const Embed1 = new MessageEmbed()
        .setTitle(`Role Deleted!`)
        .setColor(roleDelete.color)
        .addField(`${message.author.username} has deleted the role \`${roleDelete.name}\``, `\n> Its ID: \`${roleDelete.id}\`\n> Its Hex Color Code: \`${roleDelete.color}\``);
      message.channel.send(Embed1);
    }
  },
};