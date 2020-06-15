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
        case `quickhelp`:
            client.commands.get('quickhelp').execute(message, args);
             break;
        case `reddit`:
            client.commands.get('reddit').run(client, message, args);
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
            embed.setColor("BLACK"); //can specifiy color of embed here
            embed.setImage(user.displayAvatarURL());
            message.channel.send(embed);
    } else { //if a user id IS specified (need developer mode on on discord to get it)
            user = message.mentions.users.first();
            embed.setColor("BLACK"); //can specifiy color of embed here
            embed.setImage(user.displayAvatarURL());
            message.channel.send(embed);
        }
    }
})

var commando = require('discord.js-commando');
var discord = require('discord.js');

class aboutuser extends commando.Command 
{
    constructor(client) {
        super(client, {
            name: 'aboutuser',
            group: 'help',
            memberName: 'aboutuser',
            description: 'Lists information about a specific user.',
            aliases: ['au', 'aboutu', 'auser', 'user'],
        })
    }
async run(message, args){
    const userMention = message.mentions.users.first() || msg.author;
    const memberMention = message.mentions.members.first() || msg.member;

    let userinfo = {};
    userinfo.bot = userMention.bot;
    userinfo.createdat = userMention.createdAt;
    userinfo.discrim = userMention.discriminator;
    userinfo.id = userMention.id;
    userinfo.mfa = userMention.mfaEnabled;
    userinfo.pre = userMention.premium;
    userinfo.presen = userMention.presence;
    userinfo.tag = userMention.tag;
    userinfo.uname = userMention.username;
    userinfo.verified = userMention.verified;

    userinfo.avatar = userMention.avatarURL;

    const rolesOfTheMember = memberMention.roles.filter(r => r.name !== '@everyone').map(role => role.name).join(', ')

    var myInfo = new discord.RichEmbed()
        .setAuthor(userinfo.uname, userinfo.avatar)
        .addField("Bot?",userinfo.bot, true)
        .addField("Created At",userinfo.createdat, true)
        .addField("Discriminator",userinfo.discrim, true)
        .addField("Client ID",userinfo.id, true)
        .addField("2FA/MFA Enabled?",userinfo.mfa, true)
        .addField("Paid Account?",userinfo.pre, true)
        .addField("Presence",userinfo.presen, true)
        .addField("Client Tag",userinfo.tag, true)
        .addField("Username",userinfo.uname, true)
        .addField("Verified?",userinfo.verified, true)
        .setColor(0xf0e5da)
        .setFooter('s!aboutserver')
        .setTitle("About this user...")
        .setThumbnail(userinfo.avatar)


        message.channel.sendEmbed(myInfo);

}

}
module.exports = aboutuser;


client.login(token);