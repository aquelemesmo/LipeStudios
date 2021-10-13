const { MessageEmbed } = require("discord.js");
const ms = require("parse-ms")
const db = require("quick.db")

module.exports.run = async (bot, message, args) => {
    const membro = message.author
    let quantia = Math.floor(Math.random() * 500)
    let moedinhas = await db.fetch(`moedinhas_${membro.id}`)
    let timeout = 50000000;

    if (moedinhas !== null && timeout - (Date.now() - moedinhas) > 0) {
        let m = ms(timeout - (Date.now() - moedinhas));
    
        const tempo = new MessageEmbed()
        .setColor("PURPLE")
        .setDescription(`Você já trabalhou, aguarde agora em ${m.minutes}m. ${m.seconds}s.`);
        message.reply({embeds: [tempo]})
    } else {
        const embed = new MessageEmbed()
        .setColor("PURPLE")
        .setDescription("Você trabalhou e ganhou " + quantia + " de moedinhas")
        message.reply({embeds: [embed]})
        db.add(`moedinhas_${membro.id}`, quantia)
        db.set(`trabalho_${membro.id}`, Date.now())
    }
}

module.exports.help = {
    name: "work",
    aliases: ["trabalhar"]
}