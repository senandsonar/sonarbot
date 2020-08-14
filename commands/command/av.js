const Discord = require('discord.js');

const mongoose = require('mongoose');
const Guild = require('../../models/guild');
const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
	  name: "avatar",
	  aliases: ["av"],
	  category: "image",
	  cooldown: 3,
	  description: "Shows Avatar",
	  usage: "[username | nickname | mention | ID](optional)",
	  accessableby: "everyone",
	run: async(bot, message, args) => {
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
         
		
	  let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
  
	  if (args[0]) {
		message.channel.send({
		  embed: {
  
			title: `${user.user.username}'s Avatar`,
  
			color: `#faf6f6`,
  
			image: {
			  url: `${user.user.displayAvatarURL({dynamic: true})}` + '?size=4096'
			},
  
			timestamp: new Date(),
  
			footer: {
			  text: message.guild.name,
			  icon_url: message.guild.iconURL()
			}
		  }
		})
	  }
	  else if (!args[0]) {
		message.channel.send({
		  embed: {
  
			title: `${user.user.username}'s Avatar`,
  
			color: `#faf6f6`,
  
			image: {
			  url: `${user.user.displayAvatarURL({ dynamic: true })}` + '?size=4096'
			},
  
			timestamp: new Date(),
  
			footer: {
			  text: message.guild.name,
			  icon_url: message.guild.iconURL()
			}
  
		  }
		})
	  }
	}
  }