const { MessageEmbed } = require("discord.js")
const db = require("quick.db")
const mensagem = require("../../../json/mensagem.json")

module.exports.run = async (bot, message, args) => {
    if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(mensagem.sem_permissao)

    const membro = message.mentions.members.first()

    if(!membro) return message.channel.send(mensagem.mencione_membro)

    if(!args[1]) return message.channel.send(mensagem.digite_coins2)

    const channel_logs = bot.channels.cache.get("895852308880056360")

    const embed = new MessageEmbed()
    .setColor("ORANGE")
    .setDescription("Foi adicionado " + args[1] + " para o usuário " + membro.user.username)
    message.reply({embeds: [embed]})
    db.subtract(`coins_${membro.id}`, args[1])

    const logsEmbed = new MessageEmbed()
    .setColor("ORANGE")
    .setAuthor(`${membro.username}#${membro.discriminator}`, membro.displayAvatarURL())
    .setTitle("LOGS - Coins removidos")
    .setDescription(`${message.author.username} removeu ${args[1]} coins para o usuário ${membro.user.username}`)
    .setTimestamp()
    await channel_logs.send({embeds: [logsEmbed]})
}

module.exports.help = {
    name: "removemoney",
    aliases: ["removermoney", "removeMoney"]
}