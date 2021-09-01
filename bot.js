const { Client, Collection } = require("discord.js")
const bot = new Client({intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS', 'GUILD_PRESENCES', 'DIRECT_MESSAGE_REACTIONS', 'GUILD_MESSAGE_TYPING', 'DIRECT_MESSAGE_TYPING', 'GUILD_VOICE_STATES']});
const { readdir } = require("fs")
const config = require("./src/json/config.json")   
bot.commands = new Collection();
bot.aliases = new Collection();

readdir("./src/commands/auth", (err, files) => {
    if(err) console.error(err)
    let arquivojs = files.filter(f => f.split(".").pop() === "js")
    arquivojs.forEach((f, i) => {
        let props = require(`./src/commands/auth/${f}`)
        bot.commands.set(props.help.name, props)
        props.help.aliases.forEach(alias => {
            bot.aliases.set(alias, props.help.aliases)
        })
    })
})


readdir("./src/commands/utils", (err, files) => {
    if(err) console.error(err)
    let arquivojs = files.filter(f => f.split(".").pop() === "js")
    arquivojs.forEach((f, i) => {
        let props = require(`./src/commands/utils/${f}`)
        bot.commands.set(props.help.name, props)
        props.help.aliases.forEach(alias => {
            bot.aliases.set(alias, props.help.aliases)
        })
    })
})

readdir("./src/commands/db", (err, files) => {
    if(err) console.error(err)
    let arquivojs = files.filter(f => f.split(".").pop() === "js")
    arquivojs.forEach((f, i) => {
        let props = require(`./src/commands/db/${f}`)
        bot.commands.set(props.help.name, props)
        props.help.aliases.forEach(alias => {
            bot.aliases.set(alias, props.help.aliases)
        })
    })
})

readdir("./src/events", (err, files) => {
    if (err) console.error(err);
    files.forEach(file => {
        const event = require(`./src/events/${file}`)
        let nomeEvento = file.split(".")[0];
        bot.on(nomeEvento, event.bind(null, bot));
    })
})


bot.on("messageCreate", message => {
    let {guild} = message;

    if (message.author.bot) return;
    if (message.type.channel === "dm") return;
    if (message.content.indexOf(".") == 0);
    if (message.content.indexOf(config.prefix) !== 0) return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ")
    let args = message.content.slice(prefix.length).trim().split(/ +/g)
    let command = args.shift().toLowerCase();
    let arquivoCommand = [];

    if (bot.commands.has(command)) {
        arquivoCommand = bot.commands.get(command)
    } else if (bot.aliases.has(command)) {
        arquivoCommand = bot.commands.get(bot.aliases.get(command))
    }

    try {
        arquivoCommand.run(bot, message, args)
    } catch (e) {
    }
})

bot.login(config.token)
