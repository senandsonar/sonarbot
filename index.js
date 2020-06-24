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

client.on("ready", () =>{
   console.log(`Logged in as ${client.user.tag}!`);
   client.user.setPresence({
        status: "online",  //You can show online, idle....
        game: {
            name: "Use !help",  //The message shown
            type: "STREAMING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });
 });

// const activities_list = [
 //   "with the help command", 
 //   "with Visual Studio",
 //   "with ,help", 
 //   "with Covid-19"
 //   ]; // creates an arraylist containing phrases you want your bot to switch through.

//client.on('ready', () => {
 //   setInterval(() => {
 //       const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
  //      client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
 //   }, 3500); 
//});



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
        case `covid`:
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
         case `changelog`:
            client.commands.get('changelog').execute(message, args);
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
            client.commands.get('unban').run(client, message, args)
            break;
        case `ban`:
            client.commands.get('ban').run(client, message, args)
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
        case `inviteme`:
            client.commands.get('inviteme').execute(message, args);
            break;
        case `slowmode`:
            client.commands.get('slowmode').run(client, message, args);
            break;
        case `spotify`:
            client.commands.get('spotify').run(client, message, args);
            break;
        case `emoji`:
            client.commands.get('emoji').run(client, message, args);
            break;
        case `report`:
            client.commands.get('report').run(client, message, args);
            break;
        case `define`:
            client.commands.get('define').run(client, message, args);
            break;
        case `background`:
            client.commands.get('background').execute(message, args);
            break;
        case `commandlist`:
            client.commands.get('commandlist').execute(message, args);
             break;
        case `reddit`:
            client.commands.get('reddit').run(client, message, args);
            break;
        case `dm`:
            client.commands.get('dm').run(client, message, args);
            break;
        case `supportserver`:
            client.commands.get('supportserver').execute(message, args);
             break;
        case `officialserver`:
            client.commands.get('officialserver').execute(message, args);
             break;
        case `userinfo`:
            client.commands.get('userinfo').execute(message, args);
             break;
        case `av`:
            client.commands.get('av').run(client, message, args);
            break;
        case `coinflip`:
            client.commands.get('coinflip').run(client, message, args);
            break;
        case `uptime`:
            client.commands.get('uptime').run(client, message, args);
            break;
        case `whois`:
            client.commands.get('whois').run(client, message, args);
            break;
        case `role`:
            client.commands.get('role').run(client, message, args);
            break;
        case `mischelp`:
            client.commands.get('mischelp').execute(message, args);
            break;
        //case `newhelp`:
         //   client.commands.get('newhelp').execute(message, args);
         //   break;
        case `modhelp`:
            client.commands.get('modhelp').execute(message, args);
            break;
        case `infohelp`:
            client.commands.get('infohelp').execute(message, args);
            break;
        case `funhelp`:
            client.commands.get('funhelp').execute(message, args);
            break;
        case `serverlist`:
            client.commands.get('serverlist').run(client, message, args);
            break;
        case `tweet`:
            client.commands.get('tweet').run(client, message, args);
            break;
        case `clyde`:
            client.commands.get('clyde').run(client, message, args);
            break;
        case `channelinfo`:
            client.commands.get('channelinfo').run(client, message, args);
            break;
        case `rolememberinfo`:
            client.commands.get('rolememberinfo').run(client, message, args);
            break;
        case `meme`:
            client.commands.get('meme').run(client, message, args);
            break;
        case `setnick`:
            client.commands.get('setnick').run(client, message, args);
            break;
        case `addrole`:
            client.commands.get('addrole').run(client, message, args);
            break;
        case `removerole`:
            client.commands.get('removerole').run(client, message, args);
            break;
        case `invites`:
            client.commands.get('invites').run(client, message, args);
            break;
        case `serverinfo`:
            client.commands.get('serverinfo').run(client, message, args);
            break;
        case `calculate`:
            client.commands.get('calculate').run(client, message, args);
            break;
        case `createmuterole`:
            client.commands.get('createmuterole').run(client, message, args);
            break;
        case `wikisearch`:
            client.commands.get('wikisearch').run(client, message, args);
            break;
        case `join`:
            client.commands.get('join').run(client, message, args);
            break
        default:
            break;
    }
});




client.login(token);