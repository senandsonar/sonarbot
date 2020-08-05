const Discord = require('discord.js');
const fetch = require('node-fetch');

const mongoose = require('mongoose');
const Guild = require('../../models/guild');
module.exports={
        name: "clyde",
        noalias: [''],
        category: "image",
        cooldown: 8,
        description: "Shows Embed Send By Clyde Bot",
        usage: "<text>",
        accessableby: "everyone",
    run: async (bot, message, args) => {
        const settings = await Guild.findOne({
          guildID: message.guild.id
        }, (err, guild) => {
          if (err) console.error(err)
        })

        let text = args.join(" ");

        if (!text) {
            return message.channel.send("**Enter Text**");
        }

        let m = await message.channel.send("**Please Wait...**");
        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`));
            let json = await res.json();
            let attachment = new Discord.MessageAttachment(json.message, "clyde.png");
            message.channel.send(attachment);
            m.delete({ timeout: 5000 });
        } catch (e) {
            m.edit(e.message);
        }
    }
}