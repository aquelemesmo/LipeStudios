const db = require("quick.db")
const ms = require("parse-ms")
const mensagem = require("../../json/mensagem.json")
const { MessageEmbed } = require("discord.js")

module.exports.run = async (bot, message, args) => {
    const membro = message.mentions.members.first() || message.guild.members.get(args[0])
    
    let coins = await db.fetch(`coins_${message.author.id}`)
    let banco = await db.fetch(`banco_${message.author.id}`)
    if(coins === null) coins = 0
    if(banco === null) banco = 0
    let quantia = Math.floor(Math.random() * 500)

    if(!membro) return message.channel.send(mensagem.mencionar_membro)

    const notMoney = new MessageEmbed()
    .setColor("ORANGE")
    .setDescription("O usuário que você está tentando roubar, não tem coins o suficiente")

    if (coins < 0) return message.reply({embeds: [notMoney]})

    let channel_logs = bot.channels.cache.get("895852308880056360")

    const embed = new MessageEmbed()
    .setColor("ORANGE")
    .setThumbnail("https://cdn-icons.flaticon.com/png/512/4441/premium/4441031.png?token=exp=1637903878~hmac=5210d5d361050b1b7a6fe82b99efdd2f")
    .setDescription("Você roubou o " + membro.user.username + " e ganhou " + quantia + " coins")
    message.reply({embeds: [embed]})
    db.add(`roubar_${message.author.id}`, quantia)
    db.set(`roubar_${membro.id}`, Date.now())

    const logsEmbed = new MessageEmbed()
    .setColor("ORANGE")
    .setAuthor(`${membro.username}#${membro.discriminator}`, membro.displayAvatarURL())
    .setDescription(`${message.author.username} roubou o ${membro} diária e ganhou ${quantia} coins`)
    .setTimestamp()
    channel_logs.send({embeds: [logsEmbed]})
}

module.exports.help = {
    name: "roubar",
    aliases: ["rob"],
}