
const { MessageEmbed } = require('discord.js');

const mongoose = require('mongoose');
const Guild = require('../../models/guild');
module.exports={
	name: 'commandinfo',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['cmdinfo'],
	usage: '[command name]',
	cooldown: 5,
	run: async (bot, message, args) => {  
		
			
				const settings = await Guild.findOne({
					guildID: message.guild.id
				}, (err, guild) => {
					if (err) console.error(err)
				})
        if (!message.member.permissions.has("ADMINISTRATOR"))
        return message.channel.send(`You do not have administrator! @${message.author.username}`)
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			data.push('Here\'s a list of all my commands:');
			data.push(commands.map(command => command.name).join(', '));
            data.push(`\nYou can send \`${settings.prefix}help [command name]\` to get info on a specific command!`);
            

            if (args.length == 0){
        
                const sembed = new MessageEmbed()
                     .setColor(`RED`)
                      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                      .setDescription(`**Invalid Operation** :x:  \n> \`\`\`Syntax: ${settings.prefix}[commandinfo|cmdinfo] {command name}\n> \n> Usage: Shows info about a command. \`\`\``)
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
		if (command.usage) data.push(`**Usage:** ${settings.prefix}${command.name} ${command.usage}`);

		data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

		message.channel.send(data, { split: true });
	},
};