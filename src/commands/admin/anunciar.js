const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot,message,args) => {
    if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply("Você não tem permissão para usar esse comando!")

    const channelId = bot.channels.cache.get("895698975477346334");

    const perguntas = ['Qual será o título do anúncio?', 'Qual será a descrição?', 'Em qual canal será anunciado?']
    const respostas = []
    let tempo = 1000 * 5

    let msg = await message.reply(perguntas[0])
    
    let filtro = m => m.author.id === message.author.id && message.user.id;

    const collector = message.channel.createMessageCollector({filtro, max: perguntas.length, time: tempo})
    
    collector.on('collect', msg => {
        respostas.push(msg.content)
    })

    collector.on('end', async () => {
        const embed = new MessageEmbed()
        .setTitle(`RedeBlazer - ${respostas[0]}`)
        .setDescription(`${respostas[1]}`)
        .setColor('ORANGE')
        .setFooter('Anúncio enviado por ' + message.author.username, message.author.displayAvatarURL())
        await channelId.send({embeds: [embed]})
    })
}

module.exports.help = {
    name: "anunciar",
    aliases: ["anunio"]
}