const discord = require("discord.js")


module.exports = {
  name: "createmuterole",
  category: "info",
  description: "Get the stats of corona",
  usage: "corona all or corona <country>",
  aliases: ["covid", "covid19"],
  run: async (client, message, args) => {

    let muterole = message.guild.roles.cache.find(r => r.name === "Muted")
        message.guild.roles.create({
            data: {
                name: "Muted",
                color: "#514f48",
                permissions: []
            }
        })
        message.guild.channels.cache.forEach(async (channel) => {
            await channel.createOverwrite(), {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false,
                SPEAK: false,
                CONNECT: false,
                

            
            }
            if (!message.guild.roles.cache.has('Muted')) {
            message.channel.send('Muterole Created')}
    })}}