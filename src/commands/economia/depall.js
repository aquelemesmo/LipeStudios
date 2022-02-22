const {MessageEmbed} = require("discord.js");
const { Database } = require("simpl.db");
const db = new Database()

module.exports.run = async (bot, message, args) => {
    const membro = message.author;

    const moedinhas = db.fetch(`moedinhas.${message.guild.id}.${membro.id}`)

    const embed = new MessageEmbed()
        .setColor("PURPLE")
        .setTitle("Sucesso!")
        .setDescription("Você depositou todo suas moedinhas para o banco!")
    message.reply({embeds: [embed]})
    db.subtract(`moedinhas.${message.guild.id}.${membro.id}`, moedinhas)
    db.add(`banco.${message.guild.id}.${membro.id}`, moedinhas)

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