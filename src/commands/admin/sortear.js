const {MessageEmbed} = require("discord.js");
const mensagem = require("../../json/mensagem.json")
const db = require("quick.db")
const moment = require("moment")
const time = require("../../functions/timeToMilliseconds")

module.exports.run = async (bot, message, args) => {
    if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply(mensagem.semPermissão)
    if(!message.guild.me.permissions.has("ADMINISTRATOR")) return message.reply(mensagem.semPermissãoGuild)

    if(args.length === 0) {
        const length = new MessageEmbed()
            .setColor("PURPLE")
            .setTitle("Como usar o comando **sortear**")
            .setDescription("Use dessa forma: `lp!sortear <criar/finalizar/reroll>`")
        return message.reply({embeds: [length]})
    }

    if(args[0] === "criar") {
        moment.localeData("pt-br")
        var t = false;
        let perguntas = ["Qual título vai ser o sorteio?", "Quanto tempo vai durar? (ex: 1s, 1m, 1h, 1d)", "Quantos ganhadores vão ser? (Máximo de 20 ganhadores)", "Qual canal vai acontecer esse sorteio?",]
        let respostas = []
        let emoji = ["🎉"]

        const infosorteio = await db.fetch(`sorteio_${message.guild.id}`)

        if(infosorteio) {return message.reply("Já tem um sorteio rolando!!")}

        message.reply(perguntas[0])

        const collector = message.channel.createMessageCollector({filter: ({author}) => author.id === message.author.id, max: perguntas.length})

        collector.on(`collect`, async m => {
            respostas.push(m.content)
            if(perguntas[respostas.length - 1] === "Quantos ganhadores vão ser? (Máximo de 20 ganhadores)") {
                if(Number(respostas[respostas.length - 1]) > 20) {
                    m.reply("Você ultrapassou de 20 ganhadores")
                    return collector.stop()
                }

                if(Number(respostas[respostas.length - 1]) <= 0) {
                    m.reply("Você colocou 0 ganhadores ou menos")
                    return collector.stop()
                }
            }
            if(respostas > 4) return collector.stop()
            message.reply(perguntas[respostas.length])
        })

        collector.on(`end`, async (coletado, motivo) => {
            if(t) return;
            let channelset = message.guild.channels.cache.get(respostas[4].replace(/[<#>]/g, ""))
            if(!channelset) {
                message.reply("Esse canal não existe infelizmente.")
                return collector.stop()
            }

            const embedSorteio = new MessageEmbed()
            .setColor("PURPLE")
            .setTitle(`TITULOKKK`)
            .setThumbnail(message.guild.iconURL())
            .setDescription(repostas[1] + `O sorteio será finalizado em ${Math.round((Date.now() + time(respostas[2]) / 1000))} segundos.`)
            await channelset.send({embed: [embedSorteio]}).then(msg => {
                msg.react(emoji)
            })
            setTimeout( async () => {
                informacoesdadas = await db.fetch(`${message.guild.id}`)
                emoji = await (bot.channels.cache.get(informacoesdadas.channel)).messages.fetch(emoji.id)
                ganhador = emoji.reactions.cache.get(emoji).users.cache.map(x => x.id)
                console.log(ganhador)
                ganhador = ganhador[Math.round(Math.random() * ganhador.length)]
                for(let i = 0; i < Number(respostas[2]); i++) {
                    const embedFinalizacao = new MessageEmbed()
                    .setColor("PURPLE")
                    .setTitle(`TITULOKKK`)
                    .setThumbnail(message.guild.iconURL())
                    .setDescription(`Sorteio finalizado! o ganhador foi`)
                }
            }, time(respostas[2]));
        })
    }
}

module.exports.help = {
    name: "sortear",
    aliases: ['giveaway', 'sorteio']
}