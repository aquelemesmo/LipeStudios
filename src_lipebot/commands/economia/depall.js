const { MessageEmbed } = require("discord.js");
const db = require("quick.db")

module.exports.run = async (bot, message, args) => {
    const membro = message.author;

    const moedinhas = db.fetch(`moedinhas_${message.guild.id}_${membro.id}`)

    const embed = new MessageEmbed()
        .setColor("PURPLE")
        .setTitle("Sucesso!")
        .setDescription("Você depositou todo suas moedinhas para o banco!")
    message.reply({embeds: [embed]})
    db.subtract(`moedinhas_${message.guild.id}_${membro.id}`, moedinhas)
    db.add(`banco_${message.guild.id}_${membro.id}`, moedinhas)

    if(moedinhas < 0) {
        const embedNoMoney = new MessageEmbed()
            .setColor("PURPLE")
            .setDescription("Você não tem nenhuma moedinha para ser depositado.")
        return message.reply({embeds: [embedNoMoney]})
    }
}

module.exports.help = {
    name: "depall",
    aliases: ["dep-all"],
}