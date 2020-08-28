const { Client, MessageAttachment, Collection, MessageEmbed } = require('discord.js');
const { config } = require('dotenv');
const fs = require('fs');
const Guild = require('./models/guild');
const mongoose = require('mongoose');
const client = new Client();
const { PREFIX, TOKEN } = require('./configg');
const jimp = require('jimp');
const Levels = require("discord-xp");

const mongoeconomy = require("discord-mongodb-economy");
const db = require('quick.db');

["aliases", "commands"].forEach(x => client[x] = new Collection());
["commandy"].forEach(x => require(`./handlers/${x}`)(client));


client.commands = new Collection();
client.aliases = new Collection();
client.mongoose = require('./utils/mongoose');

client.categories = fs.readdirSync('./commands/');

config({
    path: `${__dirname}/.env`
});

['command'].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

fs.readdir('./events/', (err, files) => {
    if (err) return console.error;
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        const evt = require(`./events/${file}`);
        let evtName = file.split('.')[0];
        console.log(`Loaded event '${evtName}'`);
        client.on(evtName, evt.bind(null, client));
    });
});




    
    
    
      //const AntiSpam = require('discord-anti-spam');
      //const antiSpam = new AntiSpam({
        //  warnThreshold: 6, // Amount of messages sent in a row that will cause a warning.
        //  maxInterval: 2000, // Amount of time (in milliseconds) in which messages are considered spam.
        //  warnMessage: '{@user}, Please stop spamming.', // Message that will be sent in chat upon warning a user.
        //  maxDuplicatesWarning: 7, // Amount of duplicate messages that trigger a warning.
        //  exemptPermissions: [ 'ADMINISTRATOR'], // Bypass users with any of these permissions.
        //  ignoreBots: true, // Ignore bot messages.
        //  verbose: true, // Extended Logs from module.
        //  ignoredUsers: [], // Array of User IDs that get ignored.
          // And many more options... See the documentation.
     // });
       
      client.on('ready', () => console.log(`Logged in as ${client.user.tag}.`));
      const Discord = require("discord.js");
      
      //client.on('message', (message) => antiSpam.message(message));
      client.on('message', async message => {
        let prefix;
        if (message.author.bot || message.channel.type === "dm") return;
            try {
                let fetched = await db.fetch(`prefix_${message.guild.id}`);
                if (fetched == null) {
                    prefix = PREFIX
                } else {
                    prefix = fetched
                }
            } catch (e) {
                console.log(e)
        };
        
            
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;
    
        let messageFetch = db.fetch(`guildMessages_${message.guild.id}`)
        if (messageFetch === null) return;
    
        db.add(`messages_${message.guild.id}_${message.author.id}`, 1)
        let messagefetch = db.fetch(`messages_${message.guild.id}_${message.author.id}`)
    
        let messages;
        if (messagefetch == 0) messages = 0; //Level 0
        else if (messagefetch == 100) messages = 100; // Level 1
        else if (messagefetch == 200) messages = 200; // Level 2
        else if (messagefetch == 300) messages = 300; // Level 3
        else if (messagefetch == 400) messages = 400; // Level 4
        else if (messagefetch == 500) messages = 500; // Level 5
        else if (messagefetch == 600) messages = 600; // Level 6
        else if (messagefetch == 700) messages = 700; // Level 7
        else if (messagefetch == 800) messages = 800; // Level 8
        else if (messagefetch == 900) messages = 900; // Level 9
        else if (messagefetch == 1000) messages = 1000; // Level 10
        else if (messagefetch == 1100) messages = 1100; // Level 11
        else if (messagefetch == 1200) messages = 1200; // Level 12
        else if (messagefetch == 1300) messages = 1300; // Level 13
        else if (messagefetch == 1400) messages = 1400; // Level 14
        else if (messagefetch == 1500) messages = 1500; // Level 15
        else if (messagefetch == 1600) messages = 1600; // Level 16
        else if (messagefetch == 1700) messages = 1700; // Level 17
        else if (messagefetch == 1800) messages = 1800; // Level 18
        else if (messagefetch == 1900) messages = 1900; // Level 19
        else if (messagefetch == 2000) messages = 2000; // Level 20
        else if (messagefetch == 2100) messages = 2100; // Level 21
        else if (messagefetch == 2200) messages = 2200; // Level 22
        else if (messagefetch == 2300) messages = 2300; // Level 23
        else if (messagefetch == 2400) messages = 2400; // Level 24
        else if (messagefetch == 2500) messages = 2500; // Level 25
        else if (messagefetch == 2600) messages = 2600; // Level 26
        else if (messagefetch == 2700) messages = 2700; // Level 27
        else if (messagefetch == 2800) messages = 2800; // Level 28
        else if (messagefetch == 2900) messages = 2900; // Level 29
        else if (messagefetch == 3000) messages = 3000; // Level 30
        else if (messagefetch == 3100) messages = 3100; // Level 31
        else if (messagefetch == 3200) messages = 3200; // Level 32
        else if (messagefetch == 3300) messages = 3300; // Level 33
        else if (messagefetch == 3400) messages = 3400; // Level 34
        else if (messagefetch == 3500) messages = 3500; // Level 35
        else if (messagefetch == 3600) messages = 3600; // Level 36
        else if (messagefetch == 3700) messages = 3700; // Level 37
        else if (messagefetch == 3800) messages = 3800; // Level 38
        else if (messagefetch == 3900) messages = 3900; // Level 39
        else if (messagefetch == 4000) messages = 4000; // Level 40
        else if (messagefetch == 4100) messages = 4100; // Level 41
        else if (messagefetch == 4200) messages = 4200; // Level 42
        else if (messagefetch == 4300) messages = 4300; // Level 43
        else if (messagefetch == 4400) messages = 4400; // Level 44
        else if (messagefetch == 4500) messages = 4500; // Level 45
        else if (messagefetch == 4600) messages = 4600; // Level 46
        else if (messagefetch == 4700) messages = 4700; // Level 47
        else if (messagefetch == 4800) messages = 4800; // Level 48
        else if (messagefetch == 4900) messages = 4900; // Level 49
        else if (messagefetch == 5000) messages = 5000; // level 50
    
        if (!isNaN(messages)) {
            db.add(`level_${message.guild.id}_${message.author.id}`, 1)                    
            let levelfetch = db.fetch(`level_${message.guild.id}_${message.author.id}`)
    
            const levelembed = new MessageEmbed()
                .setColor('#faf6f6')
                .setDescription(`**${message.author}, You Have Leveled Up To Level ${levelfetch}**`)
                .setFooter(`${prefix}disablexp To Disable Level Up Messages`)
            message.channel.send(levelembed);
        };
    });
    
    client.on('message', async message => {
        let prefix;
            try {
                let fetched = await db.fetch(`prefix_${message.guild.id}`);
                if (fetched == null) {
                    prefix = PREFIX
                } else {
                    prefix = fetched
                }
            } catch (e) {
                console.log(e)
        };
        try {
            if (message.mentions.has(bot.user) && !message.mentions.has(message.guild.id)) {
                return message.channel.send(`**My Prefix In This Server is - \`${prefix}\`**`)
            }
        } catch {
            return;
        };
    });

    client.on('message', async message => {
  
        try {
            const hasText = Boolean(message.content);
            const hasImage = message.attachments.size !== 0;
            const hasEmbed = message.embeds.length !== 0;
            if (message.author.bot || (!hasText && !hasImage && !hasEmbed)) return;
            const origin = bot.phone.find(call => call.origin.id === message.channel.id);
            const recipient = bot.phone.find(call => call.recipient.id === message.channel.id);
            if (!origin && !recipient) return;
            const call = origin || recipient;
            if (!call.active) return;
            await call.send(origin ? call.recipient : call.origin, message, hasText, hasImage, hasEmbed);
        } catch {
            return;
        };
    });
    
    client.on('guildMemberAdd', async(member, message, bot, args) => {
    
        let wChan = db.fetch(`welcome_${member.guild.id}`)
    
        if (wChan == null) return;
    
        if (!wChan) return;
const { formatDate } = require("./functions.js");
const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
var d = new Date();
const joined = member.joinedAt
const today = Date.now()
const created = member.user.createdAt
const createdd = formatDate(member.user.createdAt)
const joinedd = formatDate(member.joinedAt)



const diffDays = Math.round(Math.abs((today - created) / oneDay));
const diffDayss = Math.round(Math.abs((today - joined) / oneDay));
        
        

        const embed = new MessageEmbed()
            .setTitle("New Member!")
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true}))
            .setColor(`RANDOM`)
            .addField("**Name**", `${member.user.tag}`, )
            .addField("ID ","`" + ` ${member.user.id} `+"`")
            //.addField("**ID**", `${member.user.id}`)
            .addField("**Account Created**", `${createdd} **(${diffDays} days ago)**`)
            .setTimestamp()

       

            try {
                member.guild.channels.cache.get(wChan).send(embed)
            } catch (e) {
    

        
            var r = member.guild.roles.cache.find(r => r.name === 'Community');
            if (!r) return;
            member.roles.add(r)
    
    }})
    client.on("messageDelete", async message => {
        
    //let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
    let channel = db.fetch(`modlog_${message.guild.id}`)
            if (channel == null) return;
            let channelll = message.channel;
            if (!channel) return;

            const embed = new MessageEmbed()
                .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
                .setColor("#ff0000")
                .setFooter(message.guild.name, message.guild.iconURL())
                .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
                .setDescription("**A message was deleted!**")
                .addField(`Channel`, `#${channelll.name}`)
                .addField("**Message Author**", message.author.tag)
                .addField("**Message Content**", message.content)
                
                .setTimestamp();

            var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(embed)
    })
client.login(TOKEN);




    


