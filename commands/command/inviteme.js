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
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
       	exampleEmbed = new Discord.MessageEmbed()
    .setColor(`#faf6f6`)
    .setAuthor(user.user.tag, user.user.displayAvatarURL({ dynamic: true }))
    .setDescription('[Click here](https://discordapp.com/oauth2/authorize?client_id=439778986050977792&scope=bot&permissions=8) to invite me to your server!')
    
	
	

    message.channel.send(exampleEmbed)
	}}
	