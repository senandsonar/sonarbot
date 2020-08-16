const { readdirSync } = require("fs")

module.exports = (bot) => {
    const load = dirs => {
        const commands = readdirSync(`./commands/${dirs}/`).filter(d => d.endsWith('.js'));
        for (let file of commands) {
            let pull = require(`../commands/${dirs}/${file}`);
            bot.commands.set(pull.name, pull);
            if (pull.aliases) pull.aliases.forEach(a => bot.aliases.set(a, pull.name));
          };
        };
        ["Command", "XP", "economy", "Games", "Music"].forEach(x => load(x));
}; 