const { Client, Collection } = require("discord.js")
const bot = new Client({intents: 32767});
const { readdir } = require("fs")
const config = require("./src/json/config.json")
const { DiscordTogether } = require("discord-together")
bot.discordTogether = new DiscordTogether(bot)
bot.commands = new Collection();
bot.aliases = new Collection();

readdir("./src/commands/admin", (err, files) => {
    if(err) console.error(err)
    let arquivojs = files.filter(f => f.split(".").pop() === "js")
    arquivojs.forEach((f, i) => {
        let props = require(`./src/commands/admin/${f}`)
        bot.commands.set(props.help.name, props)
        props.help.aliases.forEach(alias => {
            bot.aliases.set(alias, props.help.aliases)
        })
    })
})

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

readdir("./src/commands/minecraft", (err, files) => {
    if(err) console.error(err)
    let arquivojs = files.filter(f => f.split(".").pop() === "js")
    arquivojs.forEach((f, i) => {
        let props = require(`./src/commands/minecraft/${f}`)
        bot.commands.set(props.help.name, props)
        props.help.aliases.forEach(alias => {
            bot.aliases.set(alias, props.help.aliases)
        })
    })
})

readdir("./src/commands/music", (err, files) => {
    if(err) console.error(err)
    let arquivojs = files.filter(f => f.split(".").pop() === "js")
    arquivojs.forEach((f, i) => {
        let props = require(`./src/commands/music/${f}`)
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

readdir("./src/commands/config", (err, files) => {
    if(err) console.error(err)
    let arquivojs = files.filter(f => f.split(".").pop() === "js")
    arquivojs.forEach((f, i) => {
        let props = require(`./src/commands/config/${f}`)
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

bot.login(config.token)
