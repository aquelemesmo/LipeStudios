const mensagem = require("../../json/mensagem.json")
const db = require("quick.db")
const ms = require("parse-ms");
const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot,message,args) => {
    const membro = message.author;

    const repMotivo = args[0].slice(" ")

    if(!repMotivo) return message.reply(mensagem.repMotivo)

    const embed = new MessageEmbed()
    .setColor("PURPLE")
    .setTitle("Sucesso!")
    .setDescription("O usuário " + membro.user.username + " ganhou uma reputação de " + message.author.username + "\n\n> Motivo " + repMotivo)
    message.reply({embeds: [embed]})
    db.add(`rep_${message.guild.id}_${membro.id}`, 1)
}

module.exports.help = {
    name: "rep",
    aliases: ["reputação"]
}