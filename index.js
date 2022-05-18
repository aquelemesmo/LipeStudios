const { Client, Collection } = require("discord.js")
const bot = new Client({intents: 32767, ws: {properties: {$browser: "Discord iOS"}}});
const { readdir, readdirSync } = require("fs")
const config = require("./src_lipebot/json/config.json")
const { DiscordTogether } = require("discord-together");
const { Vulkava } = require("vulkava");
bot.discordTogether = new DiscordTogether(bot)
bot.commands = new Collection();
bot.aliases = new Collection();

//vulkava

bot.vulkava = new Vulkava({
    nodes: [
        {
            id: 'NODE_BR',
            hostname: '152.67.41.83',
            port: 22,
            password: 'JKComunidadeNODEBR'
        }
    ],
    sendWS: (guildId, payload) => {
        bot.guilds.cache.get(guildId)?.shard.send(payload)
    }
})

bot.vulkava.on('trackStart', (player, track) => {
    const canal = bot.channels.cache.get(player.textChannelId)

    canal.send("Está tocando agora: \`" + track.title + "\`")
})

bot.vulkava.on('queueEnd', (player) => {
    const canal = bot.channels.cache.get(player.textChannelId)

    canal.send("Fila terminada!")

    player.destroy()
})

bot.vulkava.on('error', (node, err) => {
    console.log("[LIPEMUSIC] Erro no node " + node.identifier + ": " + err)
})

//lipebot

readdirSync('./src_lipebot/commands/').forEach(dir => {
    readdir(`./src_lipebot/commands/${dir}`, (err, files) => {
        if (err) console.error(err)
        let jsFiles = files.filter(f => f.split(".").pop() === "js");
        jsFiles.forEach(file => {
            let props = require(`./src_lipebot/commands/${dir}/${file}`);
            bot.commands.set(props.help.name, props);
            // props.help.aliases.forEach(alias => {
            //     bot.aliases.set(alias, props.help.name);
            // })
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

//lipepremium

readdir(`./src_lipepremium/commands/`, (err, files) => {
    if (err) throw err;
    let jsFiles = files.filter(f => f.split(".").pop() === "js");
    jsFiles.forEach(file => {
        let props = require(`./src_lipepremium/commands/${file}`);
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

readdir(`./src_lipepremium/events/`, (err, files) => {
    if (err) console.error(err);
    files.forEach(file => {
        const event = require(`./src_lipepremium/events/${file}`)
        let nomeEvento = file.split(".")[0];
        bot.on(nomeEvento, event.bind(null, bot));
    })
});

//lipecanary

readdirSync("./src_lipecanary/commands").forEach(dir => {
    readdir(`./src_lipecanary/commands/${dir}`, (err, files) => {
        if(err) console.error(err)
        let arquivojs = files.filter(f => f.split(".").pop() === "js")
        arquivojs.forEach((f, i) => {
            let props = require(`./src_lipecanary/commands/${dir}/${f}`)
            bot.commands.set(props.help.name, props)
            props.help.aliases.forEach(alias => {
                bot.aliases.set(alias, props.help.name)
            })
        })
    })
})

readdir(`./src_lipecanary/events/`, (err, files) => {
    if (err) console.error(err);
    files.forEach(file => {
        const event = require(`./src_lipecanary/events/${file}`)
        let nomeEvento = file.split(".")[0];
        bot.on(nomeEvento, event.bind(null, bot));
    })
});

bot.login(config.token)