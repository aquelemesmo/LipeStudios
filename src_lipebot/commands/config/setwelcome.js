const mensagem = require("../../json/mensagem.json")
const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports.run = async (bot, message, args) => {
    if(!message.member.permissions.has("MANAGE_SERVER")) {return message.reply(mensagem.semPermissão)}
    if(!message.guild.me.permissions.has("MANAGE_SERVER")) {return message.reply(mensagem.semPermissãoGuild)}

    let channel = message.mentions.channels.first()

    if(!channel) return message.reply("Você precisa mencionar um canal")
    
    db.set(`welchannel_${message.guild.id}`, channel.id)

    const embed = new MessageEmbed()
    .setColor("PURPLE")
    .setTitle("Sucesso!")
    .setDescription("Adicionado mensagem de boas-vindas no canal: " + channel.name)
    message.reply({embeds: [embed]})
}

module.exports.help = {
    name: "setwelcome",
    aliases: ["setboas-vindas"]
}