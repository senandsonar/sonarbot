const Discord = require("discord.js")
const fetch = require("node-fetch");

const mongoose = require('mongoose');
const Guild = require('../../models/guild');
const { PREFIX } = require('../../configg');
const db = require('quick.db');
module.exports = {
        name: "tweet",
        noalias: [''],
        category: "image",
        cooldown: 5,
        description : "Sends A Tweet",
        usage: "[username] <text>",
        accessableby: "everyone",
    run: async(bot, message, args) => {
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }

        let user = args[0];
        let text = args.slice(1).join(" ");

        let m = await message.channel.send("**Please wait...**");

        if(!user){
            return m.edit("**You Have To Enter Someone's Twitter Nickname!**");
        }

        if(!text){
            return m.edit("**You must enter a message!**");
        }

        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=tweet&username=${user}&text=${text}`));
            let json = await res.json();
            let attachment = new Discord.MessageAttachment(json.message, "tweet.png");
            await message.channel.send(`**New tweet published by ${user}**`, attachment);
            m.delete({ timeout: 5000});
        } catch(e){
            m.edit("Error, Try Again! Mention Someone");
        }
    }
};