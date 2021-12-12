const { MessageEmbed } = require("discord.js")
const mensagem = require("../../json/mensagem.json")

module.exports.run = async (bot,message,args) => {
    const membro = message.mentions.members.first()
    const motivo = args.join(" ").slice(22)

    if(!membro) return message.reply(mensagem.mencionar_membro)
    if(!motivo) return message.reply(mensagem.colocar_motivo)

    message.delete();

    message.channel.send("Sua denúncia foi enviada! aguarde a equipe análisar o report.")

    let channel = bot.channels.cache.get("905642366369693717")

    const reportLogs = new MessageEmbed()
    .setColor("ORANGE")
    .setTitle("Novo report!")
    .addFields([
        {name: "Usuário que reportou", value: `<@${message.author.id}>`},
        {name: "Usuário reportado", value: `<@${membro.user.id}>`},
        {name: "Motivo do report", value: `${motivo}`}
    ])
    await channel.send({embeds: [reportLogs]})
}

module.exports.help = {
    name: "reportar",
    aliases: ["report"]
}