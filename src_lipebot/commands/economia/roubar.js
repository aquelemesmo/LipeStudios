const {MessageEmbed} = require("discord.js");
const { Database } = require("simpl.db")
const db = new Database()

module.exports.run = async (bot, message, args) => {
    const membro = message.mentions.members.first()

    const moedinhas = db.fetch(`moedinhas.${membro.id}`)
    const roubo = db.fetch(`roubo.${membro.id}`)
    let quantia = Math.floor(Math.random() * 500)

    const embed = new MessageEmbed()
        .setColor("PURPLE")
        .setTitle("Sucesso!")
        .setDescription("Você roubou o usuário " + membro.user.username + " e ganhou " + quantia)
    message.reply({embeds: [embed]})
    db.subtract(`moedinhas_${membro.id}`, quantia)
    db.add(`moedinhas_${membro.id}`, quantia)
    db.set(`roubo_${membro.id}`, Date.now())

    if(moedinhas < 0) {
        const noMoney = new MessageEmbed()
            .setColor("PURPLE")
            .setDescription("O usuário que você tentou roubar não tem nenhum tipo de moedinha.")
        return message.reply({embeds: [noMoney]})
    }
}

module.exports.help = {
    name: "roubar",
    aliases: ["rob"]
}