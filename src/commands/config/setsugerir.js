const mensagem = require("../../json/mensagem.json")
const { MessageEmbed } = require("discord.js")
const { Database } = require("simpl.db")
const db = new Database()

module.exports.run = async (bot, message, args) => {
    if(!message.member.permissions.has("MANAGE_SERVER")) {return message.reply(mensagem.semPermissão)}
    if(!message.guild.me.permissions.has("MANAGE_SERVER")) {return message.reply(mensagem.semPermissãoGuild)}

    let channel = message.mentions.channels.first() || args[0]

    if(!channel) {return message.reply("Você tem que mencionar um canal de texto!")}
    
    db.set(`sugestioncanal_${message.guild.id}`, channel.id)

    const embed = new MessageEmbed()
    .setColor("PURPLE")
    .setTitle("Sucesso!")
    .setDescription("Adicionado mensagem de sugestões no canal: " + channel.name)
    message.reply({embeds: [embed]})
}

module.exports.help = {
    name: "setsugerir",
    aliases: ["setsugestão"]
}