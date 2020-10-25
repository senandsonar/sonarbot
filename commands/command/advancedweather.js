const weather = require('weather-js');
const { MessageEmbed } = require('discord.js');

const mongoose = require('mongoose');
const Guild = require('../../models/guild');
const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
        name: "advancedweather",
        aliases: ['aweather'],
        category: "info",
        cooldown: 5,
        description: "Shows weather of a city",
        accessableby: "everyone",
    
    run: async(bot, message, args) => {
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
        
        if(!args[0]) return message.channel.send('**Please Enter A City Name!**')
        
      
        weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result){
        
        if(err) message.channel.send(err.message);

        if(result.length === 0) {
            message.channel.send('**Please Enter A Valid Location.**')
            return undefined;
        }

            var current = result[0].current;
            var location = result[0].location;

            const embed = new MessageEmbed()
                .setDescription(`**${current.skytext}**`)
                .setAuthor(`Weather for ${current.observationpoint} (Advanced)`)
                .setThumbnail(current.imageUrl)
                .setColor(`BLACK`)
                .addField('**Timezone**', "> " + `UTC ${location.timezone}`, true)
                .addField('**Location Latitude**', "> " + `UTC ${location.lat}`, true)
                .addField('**Location Longitude**', "> " + `UTC ${location.long}`, true)
                .addField('**Day**', "> " + `${current.day}`, true)
                .addField('**Degree Type**', "> " + `${location.degreetype}`, true)
                .addField('**Temperature**', "> " + `${current.temperature} Degrees`, true)
                .addField('**Feels Like**', "> " + `${current.feelslike} Degrees`, true)
                .addField('**Winds**', "> " + `${current.winddisplay}`, true)
                .addField('**Humidity**', "> " + `${current.humidity}%`, true)
                .addField('**Date**', "> " + `${current.date}`, true)
                .addField('**Observation Time**', "> " + `${current.observationtime}`, true)
                .addField('**Weather Alerts**', "> " + `${location.alert || "No Current Alerts"}`, true)
                
                .setFooter(message.member.displayName, message.author.displayAvatarURL())
                .setTimestamp()

            message.channel.send({embed})

        });
    }
}