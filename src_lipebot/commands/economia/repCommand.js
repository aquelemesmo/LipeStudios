const config = require("../../json/config.json")
const { MessageEmbed } = require("discord.js");
const { Database } = require("simpl.db");
const db = new Database

module.exports.run = async (bot,message,args) => {
    const membro = message.author;

    const repList = db.fetch(`rep.${message.guild.id}.${membro.id}`)

    const repMotivo = args[0].slice(" ")

    if(!repMotivo) return message.reply(config.mensagem.repMotivo)

    const embed = new MessageEmbed()
    .setColor("PURPLE")
    .setTitle("Sucesso!")
    .setDescription("O usuário " + membro.user.username + " ganhou uma reputação de " + message.author.username + "\n\n> Motivo " + repList)
    message.reply({embeds: [embed]})
    db.add(`rep.${message.guild.id}.${membro.id}`, 1)
}

module.exports.help = {
    name: "rep",
    aliases: ["reputação"]
}