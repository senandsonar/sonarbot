const { MessageEmbed } = require('discord.js');


const mongoose = require('mongoose');
const Guild = require('../../models/guild');
module.exports={
    name: 'setprefix',
    category: 'admin',
    description: 'Sets the prefix for this server.',
    usage: `prefix <newPrefix>`,
    run: async (client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
        

        if (!message.member.hasPermission('MANAGE_GUILD')) {
            return message.channel.send('You do not have permission to use this command!')
        };

        const settings = await Guild.findOne({
            guildID: message.guild.id
        }, (err, guild) => {
            if (err) console.error(err)
            if (!guild) {
                const newGuild = new Guild({
                    _id: mongoose.Types.ObjectId(),
                    guildID: message.guild.id,
                    guildName: message.guild.name,
                    prefix: process.env.PREFIX
                })

                newGuild.save()
                .then(result => console.log(result))
                .catch(err => console.error(err));

                return message.channel.send('This server was not in our database! We have added it, please retype this command.').then(m => m.delete({timeout: 10000}));
            }
        });

        if (args.length < 1) {
            const adminEmbed = new MessageEmbed()
	.setColor(`#faf6f6`)
    //.setTitle('**Do ",setup" to use Sonar to her max potential!**')
    .setDescription(`> **You must specify a prefix to set for this server! \n> \n> The current server prefix is \`${settings.prefix}\`**` )
	
        
       
        
		
	
           return message.channel.send(adminEmbed)
        };

        await settings.updateOne({
            prefix: args[0]
        });
        const adminEmbed2 = new MessageEmbed()
        .setColor(`#faf6f6`)
        .setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
        //.setTitle('**Do ",setup" to use Sonar to her max potential!**')
        .setDescription(`> **Prefix Changed to '\`${args[0]}\`' <:senbotcheck:730967576007671929>**`)
            
            
           
            
            
        
        return message.channel.send(adminEmbed2)
    }
}