const { MessageEmbed } = require('discord.js');
//const { null } = require('mathjs');
//const { null } = require('mathjs');

const mongoose = require('mongoose');
const Guild = require('../../models/guild');
module.exports={
    
    name: "spotify",
    description: "Shows the info a song someone is listening to on Spotify.",
    category: "info",
    usage: "[question]",
    noalias: "None",
    accessableby: "Administrator",

    run: async (bot, message, args) => {
        const settings = await Guild.findOne({
          guildID: message.guild.id
        }, (err, guild) => {
          if (err) console.error(err)
        })
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
        //var msg = null;
        user.presence.activities.forEach((activity) => {
            
        if (activity.type === 'LISTENING' && activity.name === 'Spotify' && activity.assets !== null) {

            let trackIMG = `https://i.scdn.co/image/${activity.assets.largeImage.slice(8)}`;
            let trackURL = `https://open.spotify.com/track/${activity.syncID}`;

            let trackName = activity.details;
            let trackAuthor = activity.state;
            let trackAlbum = activity.assets.largeText;

            trackAuthor = trackAuthor.replace(/;/g, ",")

            const embed = new MessageEmbed()
                .setAuthor('Spotify Track Info', 'https://cdn.discordapp.com/emojis/408668371039682560.png')
                .setColor("GREEN")
                .setThumbnail(trackIMG)
                .addField('Song Name', trackName, true)
                .addField('Album', trackAlbum, true)
                .addField('Author', trackAuthor, false)
                .addField('Listen to Track', `${trackURL}`, false)
                .setFooter(user.displayName, user.user.displayAvatarURL({ dynamic: true }))
                
            message.channel.send(embed);

            
            }
        })
        
}}
