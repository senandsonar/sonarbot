const discord = require("discord.js")
const { NovelCovid } = require("novelcovid");
const track = new NovelCovid();

module.exports = {
  name: "corona",
  category: "info",
  description: "Get the stats of corona",
  usage: "corona all or corona <country>",
  aliases: ["covid", "covid19"],
  run: async (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send("Please give the name of a country")
    }
    
    if(args.join(" ") === "all") {
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