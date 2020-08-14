const Discord = require('discord.js');

const mongoose = require('mongoose');
const Guild = require('../../models/guild');
const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
	name: 'inviteme',
	description: 'Creates an instant invite',
	run: async(bot, message, args) => {
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
       	exampleEmbed = new Discord.MessageEmbed()
	.setColor(`#faf6f6`)
    .setTitle('Click this link to invite me to your server!')
    .setURL('https://discord.com/api/oauth2/authorize?client_id=713353758913986562&permissions=2144857335&scope=bot')
	
	

    message.channel.send(exampleEmbed)
	}}
	