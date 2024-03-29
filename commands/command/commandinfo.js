
const { MessageEmbed } = require('discord.js');


const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
   
	name: 'commandinfo',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['cmdinfo'],
	usage: '[command name]',
	cooldown: 5,
	run: async(bot, message, args) => {
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }  
		
			
				
       
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			data.push('Here\'s a list of all my commands:');
			data.push(commands.map(command => command.name).join(', '));
            data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);
            

            if (args.length == 0){
        
                const sembed = new MessageEmbed()
                     .setColor(`BLACK`)
                      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                      .setDescription(`**Invalid Operation** <:senbotcross:730967627916378174>  \n> \`\`\`Syntax: ${prefix}[commandinfo|cmdinfo] {command name}\n> \n> Usage: Shows info about a command. \`\`\``)
                      .setTimestamp()
                    return message.channel.send(sembed);
                    }

			
		}

		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('that\'s not a valid command!');
        }
        

		data.push(`**Name:** ${command.name}`);

		if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
		if (command.description) data.push(`**Description:** ${command.description}`);
		if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

		

		message.channel.send(data, { split: true });
	},
};