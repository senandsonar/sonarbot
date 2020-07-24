const Discord = require('discord.js');
const { PREFIX } = require('../config.json');

module.exports = {
	name: 'commandlist',
	aliases: ['clist'],
	description: `Sends a DM of every command Senbot has. **Note:** Using ${PREFIX}help shows the commands more in-depth. `,
	cooldown: 10,
	run: async (bot, message, args) => {  		
		

				const data = [];
				const { commands } = message.client;
		
				if (!args.length) {
					data.push('Here\'s a list of all my commands:');
					data.push(commands.map(command => command.name).join(" | "));
		
					return message.author.send(data, { split: true })
						.then(() => {
							if (message.channel.type === 'dm') return;
							message.react('730967576007671929')
						})
						.catch(error => {
							console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
							message.reply('it seems like I can\'t DM you!');
						});}}}