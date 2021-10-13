const { MessageEmbed } = require("discord.js");
const db = require("quick.db")

module.exports.run = async (bot, message, args) => {
    const membro = message.mentions.members.first() || message.member

    let moedinhas = db.fetch(`moedinhas_${membro.id}`)
    if(moedinhas === null) moedinhas = 0;

    let banco = await db.fetch(`banco_${membro.id}`)
    if(banco === null) banco = 0;

    const embed = new MessageEmbed()
    .setColor("PURPLE")
    .setTitle("Carteira de " + membro.user.username)
    .addFields(
        {name: '> Moedinhas', value: `${moedinhas}`, inline: true},
        {name: '> Depositado', value: `${banco}`, inline: true}
    )
    message.reply({embeds: [embed]})
}

module.exports.help = {
    name: "saldo",
    aliases: ["atm", "carteira"]
}