const discord = require("discord.js")
const { NovelCovid } = require("novelcovid");
const track = new NovelCovid();

const mongoose = require('mongoose');
const Guild = require('../../models/guild');
module.exports={
  name: "covid",
  category: "info",
  cooldown: 5,
  description: "Get the stats of corona",
  usage: "covid global or corona <country>",
  aliases: ["corona", "covid19"],
  run: async (client, message, args) => 
  {
    const settings = await Guild.findOne({
      guildID: message.guild.id
    }, (err, guild) => {
      if (err) console.error(err)
    })
    
    if(!args.length) {
      return message.channel.send("Please give the name of a country")
    }
    
    if(args.join(" ") === "global") {
      let corona = await track.all() //it will give global cases
      
      let embed = new discord.MessageEmbed()
      .setTitle("Global Coronavirus Statistics")
      .setColor("#ff2050")
      .setThumbnail(`https://i.imgur.com/bytCkmY.png`)
      .setDescription("The number of cases may differ by a small amount.")
      .addField("__Total Cases__", "> " + corona.cases, false)
      .addField("__Total Deaths__", "> " + corona.deaths, false)
      .addField("__Total Recovered__", "> " + corona.recovered, false)
      .addField("__Today's Cases__", "> " + corona.todayCases, false)
      .addField("__Today's Deaths__", "> " + corona.todayDeaths, false)
      .addField("__Active Cases__", "> " + corona.active, false);
      
      return message.channel.send(embed)
      
      
      
    } else {
      let corona = await track.countries(args.join(" ")) //change it to countries
      
      let embed = new discord.MessageEmbed()
      .setTitle(`Coronavirus Statistics For ${corona.country}`)
      .setThumbnail(`https://i.imgur.com/bytCkmY.png`)
      .setColor("#ff2050")
      .setDescription("The number of cases may differ by a small amount.")
      .addField("__Total Cases__", "> " + corona.cases, false)
      .addField("__Total Deaths__", "> " + corona.deaths, false)
      .addField("__Total Recovered__", "> " + corona.recovered, false)
      .addField("__Today's Cases__", "> " + corona.todayCases, false)
      .addField("__Today's Deaths__", "> " + corona.todayDeaths, false)
      .addField("__Active Cases__", "> " + corona.active, false);
      
      return message.channel.send(embed)
      
      
    }
    
    
  }
}