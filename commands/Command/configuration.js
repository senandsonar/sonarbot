const db = require('quick.db');
const { MessageEmbed } = require('discord.js')
const { PREFIX } = require('../../configg');
module.exports = {
   
        name: "configuration",
        aliases: ['config'],
        category: 'moderation',
        description: 'Disables Server Modlog Channel',
        usage: '[channel name | channel mention | channel ID]',
        accessableby: 'Administrators',
    
    run: async (bot, message, args) => {
        let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
		
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
        if (args.length == 0){
            const configEmbed = new MessageEmbed()
		.setColor(`#faf6f6`)
		.setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true }))
		.setTitle('**Configuration Commands**')
		//.setTitle('**Do ",setup" to use Sonar to her max potential!**')
		.setFooter(`Run ${prefix}config <command> <input>`)
		.setDescription(`\`\`\`\nenablexp - Enables message XP system in the server. \nAliases: exp\n\ndisablexp - Disables message XP system in the server.\nAliases: dxp\n\nsetmodlogs - Sets the channel for server modlogs.\nAliases: smc\n\nsetwelcome - Sets the channnel for welcome messages.\nAliases: swc\n\ndisablewelcome - Disables the channel for welcome messages.\nAliases: dwc\n\nsetverification - Sets the server's verification channel.\n(Additional configuration by an admin may be required.)\nAliases: svc\n\ndisableverification - Disables the server's verification channel.\n(Additional configuration by an admin may be required.)\nAliases: dvc\`\`\``)
		
		
			return message.channel.send(configEmbed)
			}
        
        
        
        
        
            if(message.content.includes(`disablemodlogs`) || (message.content.includes("dmc"))){
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**You Do Not Have The Required Permissions! - [ADMINISTRATOR]**")

        try {
            let a = db.fetch(`modlog_${message.guild.id}`)

            if (!a) {
                return message.channel.send('**There Is No Modlog Channel Set To Disable!**')
            } else {
                let channel = message.guild.channels.cache.get(a)
                bot.guilds.cache.get(message.guild.id).channels.cache.get(channel.id).send("**Modlog Channel Disabled!**")
                db.delete(`modlog_${message.guild.id}`)

                message.channel.send(`**Modlog Channel Has Been Successfully Disabled in \`${channel.name}\`**`)
            }
            return;
        } catch {
            return message.channel.send("**Error - `Missing Permissions or Channel Doesn't Exist`**")
        }
    }

    if(message.content.includes(`enablexp`)){
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**You Do Not Have The Required Permissions! - [ADMINISTRATOR]**")

        try {
            let a = await db.fetch(`guildMessages_${message.guild.id}`)

            if (a) {
                return message.channel.send("**XP Messages Are Already Enabled In The Server!**")
            } else {
                db.set(`guildMessages_${message.guild.id}`, 1)

                message.channel.send("**XP Messages Are Enabled Successfully!**")
            }
            return;
        } catch (e) {
            console.log(e)
            return message.channel.send("**Something Went Wrong!**")
        }}

        if(message.content.includes(`disablexp`) || (message.content.includes("dxp"))){
            if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**You Do Not Have The Required Permissions! - [ADMINISTRATOR]**")
    
            try {
                let a  = await db.fetch(`guildMessages_${message.guild.id}`)
    
                if (!a) {
                    return message.channel.send("**XP Messages Are Already Disabled In The Server!**")
                } else {
                    db.delete(`guildMessages_${message.guild.id}`)
    
                    message.channel.send("**XP Messages Are Disabled Successfully!**")
                }
                return;
            } catch {
                return message.channel.send("**Something Went Wrong!**")
            }
        }


        if(message.content.includes(`setwelcome`) || (message.content.includes("swc"))){
            if (!message.member.hasPermission("ADMINISTRATOR"))
            return message.channel.send(
              "**You Do Not Have The Required Permissions! - [ADMINISTRATOR]**"
            );
          
          if (!args[1]) {
            let b = await db.fetch(`welcome_${message.guild.id}`);
            let channelName = message.guild.channels.cache.get(b);
            if (message.guild.channels.cache.has(b)) {
              return message.channel.send(
                `**Welcome Channel Set In This Server Is \`${channelName.name}\`!**`
              );
            } else return message.channel.send("**Please Enter Channel Name or ID To Set!**");
          }
      
          let channel =
            message.mentions.channels.first() ||
            bot.guilds.cache.get(message.guild.id).channels.cache.get(args[0]) ||
            message.guild.channels.cache.find(
              c => c.name.toLowerCase() === args.join(" ").toLocaleLowerCase()
            );
          
          if (!channel || channel.type !== 'text') return message.channel.send("**Please Enter A Valid Text Channel!**");
      
          try {
            let a = await db.fetch(`welcome_${message.guild.id}`);
      
            if (a === channel.id) {
              return message.channell.send(
                "**This Channel is Already Set As Welcome Channel**"
              );
            } else {
              bot.guilds.cache
                .get(message.guild.id)
                .channels.cache.get(channel.id)
                .send("**Welcome Channel Set!**");
              db.set(`welcome_${message.guild.id}`, channel.id);
      
              message.channel.send(
                `**Welcome Channel Has Been Set Successfully in \`${channel.name}\`**`
              );
            }
            return;
          } catch (e) {
                  return message.channel.send("**Error - `Missing Permissions Or Channel Is Not A Text Channel!`**");
          }}




          if(message.content.includes(`disablewelcome`) || (message.content.includes("dwc"))){
          if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**You Do Not Have The Required Permissions! - [ADMINISTRATOR]**")

          try {
              let a = db.fetch(`welcome_${message.guild.id}`)
  
              if (!a) {
                  return message.channel.send("**There Is No Welcome Channel Set To Disable!**")
              } else {
                  let channel = message.guild.channels.cache.get(a)
                  bot.guilds.cache.get(message.guild.id).channels.cache.get(channel.id).send("**Welcome Channel Disabled!**")
                  db.delete(`welcome_${message.guild.id}`)
  
                  message.channel.send(`**Welcome Channel Has Been Successfully Disabled in \`${channel.name}\`**`)
              }
              return;
          } catch {
              return message.channel.send("**Error - `Missing Permissions or Channel Doesn't Exist`**")
          }}





          
          
          
          
          
          
          
          
          
          
          
          
          if(message.content.includes(`disableverification`) || (message.content.includes("dvc"))){
          if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**You Do Not Have Required Permissions! - [ADMINISTRATOR]!**");

          let verifychannel = db.fetch(`verificationchannel_${message.guild.id}`);
          if (!verifychannel || verifychannel === null) return;
          if(!message.guild.channels.cache.has(verifychannel)) return;
  
          let verifiedchannel = message.guild.channels.cache.get(verifychannel);
          if (!verifiedchannel) return;
          
          let verifyrole = db.fetch(`verificationrole_${message.guild.id}`);
          if (!verifyrole || verifyrole === null) return;
          if(!message.guild.roles.cache.has(verifyrole)) return;
  
          let role = message.guild.roles.cache.get(verifyrole);
          if (!role) return;
  
          try {
              message.guild.channels.cache.forEach(channel => {
                  if (channel.type === 'category' && channel.id === verifiedchannel.id) return;
                  let r = channel.permissionOverwrites.get(role.id);
                  if (!r) return;
                  if (r.deny.has("VIEW_CHANNEL") || r.deny.has("SEND_MESSAGES")) return;
  
                  channel.createOverwrite(message.guild.id, {
                      VIEW_CHANNEL: true
                  });
  
                  channel.updateOverwrite(role, {
                      VIEW_CHANNEL: null,
                      SEND_MESSAGES: null
                  });
              });
  
              verifiedchannel.updateOverwrite(role, {
                  SEND_MESSAGES: null,
                  VIEW_CHANNEL: null
              });
  
              verifiedchannel.delete();
              db.delete(`verificationchannel_${message.guild.id}`);
              db.delete(`verificationrole_${message.guild.id}`);
              return message.channel.send(`**Disabled Verification System in ${message.guild.name}!**`);
          } catch {
              return message.channel.send('**Something Went Wrong!**')
          }}























          if(message.content.includes(`setverification`) || (message.content.includes("svc"))){
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**You Do Not Have Required Permissions! - [ADMINISTRATOR]!**");

        if (!args[1]) return message.channel.send("**Please Enter A Channel Name Where The User Should Be Asked To Verify!**");

        if (!args[2]) return message.channel.send("**Please Enter A Role Which Will Be Added After The User Is Verified!**");

        let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]) || message.guild.channels.cache.find(c => c.name.toLowerCase() === args[1].toLocaleLowerCase());
        if (!channel || channel.type !== 'text') return message.channel.send("**Please Enter A Valid Channel!**");

        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args[2].toLocaleLowerCase());
        if (!role) return message.channel.send("**Please Enter A Valid Role!**");

        let verifiedchannel = channel;

        try {
            let a = await db.fetch(`verificationchannel_${message.guild.id}`);
            let b = await db.fetch(`verificationrole_${message.guild.id}`);

            if (channel.id === a && role.id === b) {
                return message.channel.send('**This Channel is Already Set As Verification Channel!**');
            } else if (channel.id === a && role.id === b) {
                return message.channel.send("**This Role is Already Set As Verification Role!**");
            }
            else {
                message.guild.channels.cache.forEach(channel => {
                    if (channel.type === 'category' && channel.id === verifiedchannel.id) return;
                    let r = channel.permissionOverwrites.get(role.id);
                    if (!r) return;
                    if (r.deny.has("VIEW_CHANNEL") || r.deny.has("SEND_MESSAGES")) return;

                    channel.createOverwrite(message.guild.id, {
                        VIEW_CHANNEL: false
                    });

                    channel.updateOverwrite(role, {
                        VIEW_CHANNEL: true,
                        SEND_MESSAGES: true
                    });
                });

                verifiedchannel.updateOverwrite(role, {
                    SEND_MESSAGES: false,
                    VIEW_CHANNEL: false
                });
                bot.guilds.cache.get(message.guild.id).channels.cache.get(channel.id).send(`**Welcome To ${message.guild.name}!\nTo Get Verified Type - \`${prefix}verify\`**`);
                db.set(`verificationchannel_${message.guild.id}`, channel.id);
                db.set(`verificationrole_${message.guild.id}`, role.id);

                return message.channel.send(`**Verification Channel And Role Has Been Set Successfully in \`${channel.name}\`!**`);
            };
        } catch {
            return message.channel.send("**Error - `Missing Permissions Or Channel Is Not A Text Channel!`**");
        }}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
          if(message.content.includes(`setmodlogs`) || (message.content.includes("smc"))){
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**You Do Not Have The Required Permissions! - [ADMINISTRATOR]**")
    if (!args[0]) {
      let b = await db.fetch(`modlog_${message.guild.id}`);
      let channelName = message.guild.channels.cache.get(b);
      if (message.guild.channels.cache.has(b)) {
        return message.channel.send(
          `**Modlog Channel Set In This Server Is \`${channelName.name}\`!**`
        );
      } else
        return message.channel.send(
          "**Please Enter A Channel Name or ID To Set!**"
        );
    }
        let channel = message.mentions.channels.first() || bot.guilds.cache.get(message.guild.id).channels.cache.get(args[0]) || message.guild.channels.cache.find(c => c.name.toLowerCase() === args.join(' ').toLocaleLowerCase());

        if (!channel || channel.type !== 'text') return message.channel.send("**Please Enter A Valid Text Channel!**");

        try {
            let a = await db.fetch(`modlog_${message.guild.id}`)

            if (channel.id === a) {
                return message.channel.send("**This Channel is Already Set As Modlog Channel!**")
            } else {
                bot.guilds.cache.get(message.guild.id).channels.cache.get(channel.id).send("**Modlog Channel Set!**")
                db.set(`modlog_${message.guild.id}`, channel.id)

                message.channel.send(`**Modlog Channel Has Been Set Successfully in \`${channel.name}\`!**`)
            }
        } catch {
            return message.channel.send("**Error - `Missing Permissions Or Channel Is Not A Text Channel!`**");
        }



        
        
    }
}



    }