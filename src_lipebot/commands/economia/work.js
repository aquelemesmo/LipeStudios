const { MessageEmbed } = require("discord.js");
const ms = require("parse-ms")
const {Database} = require("simpl.db")
const db = new Database()

module.exports.run = async (bot, message, args) => {
    let quantia = Math.floor(Math.random() * 500)
    const moedinhas = db.fetch(`moedinhas.${message.author.id}`)
    let timeout = 600000;

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
        db.add(`moedinhas.${message.guild.id}.${message.author.id}`, quantia)
        db.set(`trabalho.${message.guild.id}.${message.author.id}`, Date.now())
    }
}

module.exports.help = {
    name: "work",
    aliases: ["trabalhar"]
}