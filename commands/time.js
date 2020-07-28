const date = require('date-and-time');
const Discord = require('discord.js');

module.exports={
        name: "time",
        aliases: [`date`],
        category: "info",
        cooldown: 5,
        description: "Shows weather of a city",
        accessableby: "everyone",
    
    run: async (bot, message, args) => {
        const now = new Date()
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
        const exampleEmbed = new Discord.MessageEmbed()
    .setColor(`#faf6f6`)
    .addField(`Current Date`,`> ${date.format(now, 'ddd, MMM DD YYYY')}`)
    .addField(`Current Time`,`> ${date.format(now, 'HH:mm A')}`)
	.setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
	

    message.channel.send(exampleEmbed)
	}}