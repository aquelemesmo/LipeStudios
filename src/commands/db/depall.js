const {MessageEmbed} = require("discord.js");
const db = require("quick.db")

module.exports.run = async (bot, message, args) => {
    const membro = message.member

    let moedinhas = await db.fetch(`moedinhas_${membro.id}`)
    let banco = await db.fetch(`banco_${membro.id}`)

    const embed = new MessageEmbed()
        .setColor("PURPLE")
        .setTitle("Sucesso!")
        .setDescription("Você depositou todo suas moedinjas para o banco!")
    message.reply({embeds: [embed]})
    db.add(`banco_${membro.id}`, moedinhas)
    db.subtract(`moedinhas_${membro.id}`, moedinhas)

    if(membro < 0) {
        const embedNoMoney = new MessageEmbed()
            .setColor("PURPLE")
            .setDescription("Você não tem nenhuma moedinha para ser depositado.")
        return message.reply({embeds: [embedNoMoney]})
    }
}

module.exports.help = {
    name: "depall",
    aliases: ["dep-all"]
}