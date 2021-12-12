const { MessageEmbed } = require("discord.js")
const config = require("../../json/config.json")

module.exports.run = async (bot,message,args) => {
    if(message.author.id !== config.ids.jack) {return message.reply("Você não pode usar esse comando. Só e liberado pelo desenvolvedor do bot!")}


    let perguntas = [
        "> Qual é o seu nome inteiro? *",
        "> Quantos anos você tem? *",
        "> Qual é o seu Discord? Exemplo: aquelemesmoojack#4306 *",
        "> Qual é o seu Email de contato? *",
        "> Você tem microfone? Ele transmite o áudio bem? (Sim / Não) *",
        "> Você já foi ou ainda é staff de algum outro servidor? *",
        "> Você é responsável? responda com sinceridade. *",
        "> Defina com as suas palavras o que é responsabilidade. *",
        "> Nos fale um pouco sobre você *",
    ]

    let respostas = [];

    const perguntasEmbed = new MessageEmbed()
    .setColor("ORANGE")
    .setDescription(`${perguntas[0]}`)

    message.author.send({embeds: [perguntasEmbed]})
    
    message.reply('> Formulário iniciado! cheque seu privado.')
    
    const canal = await message.author.createDM({force: true})
    const collector = canal.createMessageCollector({filter: ({ author }) => author.id === message.author.id})

    collector.on('collect', async r => {
        respostas.push("> " + r.content)
        if(perguntas.length === respostas.length || !perguntas[respostas.length]) return collector.stop()

        const perguntasEmbed2 = new MessageEmbed()
        .setColor("ORANGE")
        .setDescription(`${perguntas[respostas.length]}`)

        message.author.send({embeds: [perguntasEmbed2]})
    })

    collector.on('end', async m => {
        message.author.send("Seu formulário foi enviado para a equipe, aguarde para poder ter a sua resposta.")

        const embed = new MessageEmbed()
        .setTitle(`Perguntas do formulário de ${message.author.username}`)
        .setColor("ORANGE")
        .setDescription(`${perguntas.join('\n')}`)
        bot.channels.cache.get("917251474751369226").send({embeds: [embed, embed2]})
    })
}

module.exports.help = {
    name: "form",
    aliases: ["formulário"]
}