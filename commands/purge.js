module.exports={
        name: "purge",
        aliases: ["delete", "clear"],
        category: "moderation",
        cooldown: 10,
        description: "Deletes messages from a channel",
        usage: "delete [amount of messages]",
        accessableby: "Administrator",
    
        run: async(bot,message,args)=>{
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("\`\`\`You don't have sufficient permissions!- [ADMINISTRATOR]\`\`\`")
        if (isNaN(args[0]))
            return message.channel.send('**Please Supply A Valid Amount To Delete Messages!**');

        if (args[0] > 100)
            return message.channel.send("**Please give a number less than 100!**");

        if (args[0] < 1)
            return message.channel.send("**Please Supply A Number More Than 1!**");

        message.channel.bulkDelete(args[0])
            .then(messages => message.channel.send(`**Succesfully deleted \`${messages.size}/${args[0]}\` messages**`).then(msg => msg.delete({ timeout: 2000 }))).catch(() => null)
    }
}