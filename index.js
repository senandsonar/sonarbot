const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const config = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('ready', () => {
    client.user.setActivity('Made by Sen#1143! Sonar is a multi-purpose bot for miscellaneous commands.', { type: 'PLAYING' });
    
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();
    var randomnumber=Math.floor(Math.random()*101);
    
    switch (command) {
        case `ping`:
            client.commands.get('ping').run(client, message, args);
            break;
        case `beep`:
            message.channel.send('Boop.');
            break;
        case `userinfo`:
            message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
            break;
        case `number`:
            message.channel.send(randomnumber);
            break;
        case `corona`:
            client.commands.get('corona').run(client, message, args);
            break;
        case `kick`:
            client.commands.get('kick').run(client, message, args);
            break;
        case `8ball`:
            client.commands.get('8ball').run(client, message, args);
            break;
         case `help`:
            client.commands.get('help').execute(message, args);
            break;
         case `mute`:
            client.commands.get('mute').run(client, message, args);
            break;
        case `unmute`:
            client.commands.get('unmute').run(client, message, args);
            break;
        case `emo`:
            client.commands.get('emo').execute(message, args);
            break;
        case `poll`:
            client.commands.get('poll').run(client, message, args);
            break;
        case `purge`:
            client.commands.get('purge').run(client, message, args);
            break;
        case `status`:
            client.commands.get('status').run(client, message, args);
            break;
        case `roleinfo`:
            client.commands.get('roleinfo').run(client, message, args);
            break;
        case `weather`:
            client.commands.get('weather').run(client, message, args);
            break;
        case `unban`:
            client.commands.get('unban').execute(client, message, args)
            break;
        case `ban`:
            client.commands.get('ban').execute(client, message, args)
            break;
        case `jail`:
            client.commands.get('jail').run(client, message, args)
            break;
        case `unjail`:
            client.commands.get('unjail').run(client, message, args)
            break;
        case `setup`:
            client.commands.get('setup').execute(message, args);
             break;
        case `invite`:
            client.commands.get('invite').execute(message, args);
            break;
        default:
            break;
    }
});

client.on("message", async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g) //arguments
    const command = args.shift().toLowerCase(); //command

    if (message.content.indexOf(prefix) !== 0) return;
    
    if (command == "av") {

    var user;
    var embed = new Discord.MessageEmbed();
    user = message.mentions.users.first(); //mentioned user, if any
    if (!user) { //if no one is mentioned
            user = message.author;
            embed.setColor("RANDOM"); //can specifiy color of embed here
            embed.setImage(user.displayAvatarURL());
            message.channel.send(embed);
    } else { //if a user id IS specified (need developer mode on on discord to get it)
            user = message.mentions.users.first();
            embed.setColor("RANDOM"); //can specifiy color of embed here
            embed.setImage(user.displayAvatarURL());
            message.channel.send(embed);
        }
    }
})


client.login(token);