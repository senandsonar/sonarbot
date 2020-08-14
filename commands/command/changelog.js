const Discord = require('discord.js');

const mongoose = require('mongoose');
const Guild = require('../../models/guild');
const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
	name: 'changelog',
    description: 'help!',
    aliases: ["changes", "cl"],
	run: async(bot, message, args) => {
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
       	pleEmbed = new Discord.MessageEmbed()
	.setColor(`#faf6f6`)
    .setTitle('7/24/2020')
    .setDescription("Don't forget the check the Command List for info on new commands!")
	.setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
	.setThumbnail (`https://i.imgur.com/h1ekMX8.png`)
	.addFields(
		{ name: '**Added A Few Commands.**', value: "Added 'commandinfo', 'giveaway', 'role' commands. "},
		
	)
	.setTimestamp()

	message.channel.send(exampleEmbed)
}}