const weather = require('weather-js');
const { PREFIX } = require("../config.json");
const { MessageEmbed } = require('discord.js');

module.exports={
        name: "weather",
        noalias: "",
        category: "info",
        cooldown: 5,
        description: "Shows weather of a city",
        accessableby: "everyone",
    
    run: async (bot, message, args) => {
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
                .setAuthor(`Weather for ${current.observationpoint}`)
                .setThumbnail(current.imageUrl)
                .setColor(`#faf6f6`)
                .addField('**Degree Type**', "> " + `${location.degreetype}`, true)
                .addField('**Temperature**', "> " + `${current.temperature} Degrees`, true)
                .addField('**Feels Like**', "> " + `${current.feelslike} Degrees`, true)
                .addField('**Winds**', "> " + `${current.winddisplay}`, true)
                .addField('**Humidity**', "> " + `${current.humidity}%`, true)
                .addField('**Date**', "> " + `${current.date}`, true)
                
                .setFooter(`Use ${PREFIX}aweather for more advanced weather statistics.`)
                .setTimestamp()

            message.channel.send({embed})

        });
    }
}