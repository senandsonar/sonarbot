//const fs = require('fs');
//const Discord = require('discord.js');
//const { Client, Collection } = require("discord.js");
//const { prefix, token } = require('./config.json');
//const { TOKEN, PREFIX } = require("./config.json");
//const client = new Discord.Client();
//client.commands = new Discord.Collection();
//client.prefix = PREFIX;
//client.aliases = new Discord.Collection();
//const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const { Client, Collection, MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const { join } = require("path");
const { TOKEN, PREFIX } = require("./config.json");

const client = new Client({ disableMentions: "everyone" });

client.login(TOKEN);
client.commands = new Collection();
client.prefix = PREFIX;
client.queue = new Map();
const cooldowns = new Collection();

/**
 * Client Events
 */
client.on("ready", () => {
  console.log(`${client.user.username} ready!`);
});
client.on("warn", (info) => console.log(info));
client.on("error", console.error);



/**
 * Import all commands
 */
const commandFiles = readdirSync(join(__dirname, "commands")).filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(join(__dirname, "commands", `${file}`));
  client.commands.set(command.name, command);
}

client.on("message", async (message) => {
  if (message.author.bot) return;
  if (!message.guild) return;

  if (message.content.startsWith(PREFIX)) {
    const args = message.content.slice(PREFIX.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command =
      client.commands.get(commandName) ||
      client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    if (!cooldowns.has(command.name)) {
      cooldowns.set(command.name, new Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 1) * 1000;

    if (timestamps.has(message.author.id)) {
      const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

      if (now < expirationTime) {
        const timeLeft = (expirationTime - now) / 1000;
        message.react('730967627916378174');
        const wembed = new MessageEmbed()
        .setColor("RED")
        .setTitle(`Command On Cooldown!`)
        .setDescription(`> Please wait **${timeLeft.toFixed(1)} more second(s)** before \n> reusing the \`${command.name}\` command.`)
        .setFooter(`This message and the X reacted message will be deleted shortly.`)
        message.channel.send(wembed)
        await message.delete({ timeout: 10000 });
      }
    }

    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    try {
      command.run(client, message, args);
    } catch (error) {
      console.error(error);
      message.reply(sembed).catch(console.error);
    }
  }
});
    
    
        


    //number command below(useless)
   
    var randomnumber=Math.floor(Math.random()*101);
  

    




    const sembed = new MessageEmbed()
    .setColor("RED")
    .setDescription(`\n\`\`\`Fatal Error: There was an error when executing this command:\n\nThis message is extremely rare. If this persists, contact the bot developer Sen#4444. \`\`\``)
    .setTimestamp()


    

    





    


