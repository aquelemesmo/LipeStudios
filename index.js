const { Client, Collection } = require("discord.js")
const bot = new Client({intents: 32767, ws: {properties: {$browser: "Discord iOS"}}});
const { readdir, readdirSync } = require("fs")
const config = require("./src_lipebot/json/config.json")
const { DiscordTogether } = require("discord-together")
bot.discordTogether = new DiscordTogether(bot)
bot.commands = new Collection();
bot.aliases = new Collection();

readdirSync('./src_lipebot/commands/').forEach(dir => {
    readdir(`./src_lipebot/commands/${dir}`, (err, files) => {
        if (err) throw err;
        let jsFiles = files.filter(f => f.split(".").pop() === "js");
        jsFiles.forEach(file => {
            let props = require(`./src_lipebot/commands/${dir}/${file}`);
            try {
                bot.commands.set(props.help.name, props);
                props.help.aliases.forEach(alias => {
                    bot.aliases.set(alias, props.help.name);
                })
            } catch (err) {
                return console.log(err);
            }
        });
    });
});

readdir("./src_lipebot/events", (err, files) => {
    if (err) console.error(err);
    files.forEach(file => {
        const event = require(`./src_lipebot/events/${file}`)
        let nomeEvento = file.split(".")[0];
        bot.on(nomeEvento, event.bind(null, bot));
    })
})

//lipesupport

readdir(`./src_lipesupport/commands/`, (err, files) => {
    if (err) throw err;
    let jsFiles = files.filter(f => f.split(".").pop() === "js");
    jsFiles.forEach(file => {
        let props = require(`./src_lipesupport/commands/${file}`);
        try {
            bot.commands.set(props.help.name, props);
            props.help.aliases.forEach(alias => {
                bot.aliases.set(alias, props.help.name);
            })
        } catch (err) {
            return console.log(err);
        }
    });
});

readdir(`./src_lipesupport/events/`, (err, files) => {
    if (err) console.error(err);
    files.forEach(file => {
        const event = require(`./src_lipesupport/events/${file}`)
        let nomeEvento = file.split(".")[0];
        bot.on(nomeEvento, event.bind(null, bot));
    })
});


bot.login(config.token)
