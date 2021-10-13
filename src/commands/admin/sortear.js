const {MessageEmbed} = require("discord.js");
const mensagem = require("../../json/mensagem.json")
const db = require("quick.db")

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
        let perguntas = [
            "Qual título vai ser o sorteio?",
            "Quanto tempo vai durar? (ex: 1s, 1m, 1h, 1d)",
            "Quantos ganhadores vão ser?",
            "Qual canal vai acontecer esse sorteio?"
        ]

        let respostas = []

        const infosorteio = await db.fetch(`sorteio_${message.guild.id}`)

        if(infosorteio) {return message.reply("Já tem um sorteio rolando!!")}

        let msg = !message.isCommand ? await message.channel.send(perguntas[0]) : await message.reply(perguntas[0])
        msg = !message.isCommand ? msg : await message.fetchReply()

        const filtro = m => m.author.id === message.author.id;

        const collector = message.channel.createMessageCollector(filtro, {max: 3, time: 10000 * 5})

        collector.on(`collect`, async m => {
            respostas.push(m.content)
            if(perguntas[respostas.length - 1] === 'Quantos ganhadores vão ser?') {
                if(Number(respostas[respostas.length - 1]) > 30) {
                    message.reply("Você ultrapassou o número de ganhadores! Refaz o sorteio novamente.")
                    return collector.stop()
                }
            }
        })
    }
}

module.exports.help = {
    name: "sortear",
    aliases: ['giveaway', 'sorteio']
}