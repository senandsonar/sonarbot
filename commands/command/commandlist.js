const Discord = require('discord.js');

const mongoose = require('mongoose');
const Guild = require('../../models/guild');
const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
	name: 'commandlist',
	aliases: ['clist'],
	description: `Sends a DM of every command Senbot has.`,
	cooldown: 10,
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