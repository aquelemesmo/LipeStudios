const { MessageEmbed } = require("discord.js");
const { Database } = require("simpl.db");
const db = new Database()
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
    let timetout = 86400000;
    let quantia = Math.floor(Math.random() * 50000)

    const diaria = db.fetch(`diaria.${message.guild.id}.${message.author.id}`)

    if(diaria !== null && timetout - (Date.now() - diaria) > 0) {
        let tempo = ms(timetout - (Date.now() - diaria))
    
        const tempoEmbed = new MessageEmbed()
        .setColor("PURPLE")
        .setDescription("Você já pegou sua recompensa diária! e agora terá que esperar. " + tempo.hours + "h " + tempo.minutes + "m " + tempo.seconds + "s ")
        message.reply({embeds: [tempoEmbed]})
    } else {
        const sucessEmbed = new MessageEmbed()
        .setColor("PURPLE")
        .setDescription("Você coletou sua recompensa diária! e ganhou " + quantia)
        message.reply({embeds: [sucessEmbed]})
        db.add(`moedinhas.${message.guild.id}.${message.author.id}`, quantia)
        db.set(`diaria.${message.guild.id}.${message.author.id}`, Date.now())
    }
}

module.exports.help = {
    name: "daily",
    aliases: ["recompensa-diaria", "diaria"],
}