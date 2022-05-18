const config = require("../../json/config.json")
const db = require("quick.db")

module.exports.run = async (bot,message,args) => {
    if(!message.member.permissions.has("ADMINISTRATOR")) {return message.reply(config.mensagem.semPermissão)}
    if(!message.guild.me.permissions.has("ADMINISTRATOR")) {return message.reply(config.mensagem.semPermissãoGuild)}

    if(!args[0]) return message.reply("Coloque um prefixo")

    db.add(`prefix_${message.guild.id}`, args[0])

    const embed = new MessageEmbed()
    .setColor("PURPLE")
    .setTitle("Sucesso!")
    .setDescription("Prefixo definido como: " + args[0])
    message.reply({embeds: [embed]})
}

module.exports.help = {
    name: "setprefix",
    aliases: ["setarprefixo"]
}