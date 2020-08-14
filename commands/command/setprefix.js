const db = require('quick.db');


module.exports = {
    
        name: "setprefix",
        aliases: ['sp', 'prefix'],
        category: "moderation",
        description: "Sets Custom Prefix",
        usage: "[prefix]",
        accessableby: 'Administrators',
    
    run: async(bot, message, args) => {
		let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("**You Do Not Have Sufficient Permissions! - [ADMINISTRATOR]**")

        if (!args[0]) {
          let b = await db.fetch(`prefix_${message.guild.id}`);
          if (b) {
        return message.channel.send(
          `**Prefix Of This Server is \`${b}\`**`
        );
      } else return message.channel.send("**Please Enter A Prefix To Set!**");
    } 
      
        try {

            let a = args.join(' ');
            let b = await db.fetch(`prefix_${message.guild.id}`)

            if (a === b) {
                return message.channel.send('**This is Already The Server Prefix!**')
            } else {
                db.set(`prefix_${message.guild.id}`, a)

                return message.channel.send(`**Successfuly Set Server Prefix To \`${a}\`**`)
            }
        } catch (e) {
            console.log(e)
        }
    }
}