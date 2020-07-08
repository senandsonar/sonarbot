const { MessageEmbed, Util } = require("discord.js")
const { GOOGLE_API_KEY } = require('../config.json')
const YouTube = require("simple-youtube-api");
const youtube = new YouTube(GOOGLE_API_KEY);
const ytdl = require('ytdl-core');

module.exports = {
        name: "ytsearch",
        category: "music",
        noalias: [''],
        description: "Searches music from YouTube",
        usage: " ",
        accessableby: "everyone",
    
        run: async (bot, message, args, ops) => {
            let color = message.member.displayHexColor;
        if (color == '#000000') color = message.member.hoistRole.hexColor;
            if (args.length == 0){
        
                const sembed = new MessageEmbed()
                    .setColor(color)
                    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**Invalid Operation** :x:  \n\`\`\`Syntax: ,ytsearch {video name}\n\nUsage: Searches for a video from Youtube. \`\`\``)
                    .setTimestamp()
                    return message.channel.send(sembed);
                    }
            const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
            const searchString = args.slice(1).join(' ');
    
          
    
    
           
    
            if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
                const playlist = await youtube.getPlaylist(url);
                const videos = await playlist.getVideos();
    
                for (const video of Object.values(videos)) {
                    const video2 = await youtube.getVideoByID(video.id);
                    await handleVideo(video2, message, channel, true);
                }
            }
            else {
                try {
                    var video = await youtube.getVideo(url);
                    console.log(video)
                } catch (error) {
                    try {
                        var videos = await youtube.searchVideos(searchString, 5);
                        let index = 0;
                        const sembed = new MessageEmbed()
                            .setColor(color)
                            .setFooter(message.member.displayName, message.author.avatarURL())
                            .setDescription(`
                        __**Video selection:**__\n
                        ${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}
                                        `)
                            .setTimestamp();
                        message.channel.send(sembed).then(message2 => message2.delete({ timeout: 10000 }))
                        try {
                            var response = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 11, {
                                max: 1,
                                time: 10000,
                                errors: ['time']
                            });
                        } catch (err) {
                            console.log(err);
                            return message.channel.send('❌ **Timeout!**')
                        }
                        const videoIndex = parseInt(response.first().content);
                        var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                    } catch (err) {
                        console.error(err);
                        return message.channel.send('🆘 I could not obtain any search results.');
                    }
                }
                
                            message.channel.send(`https://www.youtube.com/watch?v=${video.id}`)
                };
    
            }
    
           
               
            }
        
    ;