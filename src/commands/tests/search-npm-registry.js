const { MessageEmbed } = require("discord.js")
const searchNpmRegistry = require("search-npm-registry")

module.exports.run = async (bot, message, args) => {
    let npm = args[0]

    const resultados = await searchNpmRegistry().text(`${npm}`).size(5).search()

    const embed = new MessageEmbed()
    .setColor("PURPLE")
    .setTitle(`Package - ${resultados[0].name}`)
    .addField("Versão", `${resultados[0].version}`)
    .addField("Descrição", `${resultados[0].description}`)
    .addField("Link", `${resultados[0].links.npm}`)
    message.reply({embeds: [embed]})
}

module.exports.help = {
    name: "searchnpmregistry",
    aliases: ["snr"]
}