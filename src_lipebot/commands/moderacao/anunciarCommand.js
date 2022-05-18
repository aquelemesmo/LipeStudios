const { MessageEmbed } = require("discord.js")
const config = require("../../json/config.json")

module.exports.run = async (bot,message,args) => {
    if(!message.member.permission.has("MANAGE_MESSAGES")) return message.replyt(config.mensagem.semPermissão)
    if(!message.guild.me.permission.has("MANAGE_MESSAGES")) return message.replyt(config.mensagem.semPermissãoGuild)

    let perguntas = [
        "Qual será o título do anúncio?",
        "Qual será a descrição do anúncio?",
        "Irá ter cor na embed?",
        "Em qual canal irá ser enviado a embed?",
        "Vai ser mencionado com everyone? (s/n)"
    ]

    let respostas = []

    const perguntasStartEmbed = new MessageEmbed()
    .setColor("PURPLE")
    .setDescription(perguntas[0])
    message.reply({embeds: [perguntasStartEmbed]})

    const collector = message.channel.createMessageCollector({filter: ({author}) => author.id === message.author.id})

    collector.on("collect", r => {
        if(perguntas[respostas.length] === 'Vai ser mencionado? (S/N)' && !['s', 'n'].some(x => re.content.toLowerCase().includes(x))) return message.channel.send('Resposta inválida, tente novamente')
        respostas.push(r.content)
        if(perguntas.length === respostas.length || !perguntas[respostas.length]) return collector.stop()
        const perguntasContinueEmbed = new MessageEmbed()
        .setColor("PURPLE")
        .setDescription(perguntas[respostas.length])
        message.reply({embeds: [perguntasContinueEmbed]})
    })

    collector.on("end", r => {
        const canal = bot.channels.cache.get(respostas[3].replace(/[<#>]/g, ""))
        if(!canal) return message.reply("Canal não encontrado! tente novamente")
        const anuncioEmbed = new MessageEmbed()
        .setColor(`${respostas[2]}`)
        .setTitle(`${respostas[0]}`)
        .setDescription(`${respostas[1]}`)
        .setFooter({text: "Anúncio feito por: " + message.author.tag})

        canal.send({content: (respostas[4].toLowerCase() === 'n' ? null: "@everyone"), embeds: [anuncioEmbed]})
    })
}

module.exports.help = {
    name: "anunciar",
    aliases: ["anuncio"]
}