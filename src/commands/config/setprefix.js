const mensagem = require("../../json/mensagem.json")
const { Database } = require("simpl.db");
const db = new Database()

module.exports.run = async (bot,message,args) => {
    if(!message.member.permissions.has("ADMINISTRATOR")) {return message.reply(mensagem.semPermissão)}
    if(!message.guild.me.permissions.has("ADMINISTRATOR")) {return message.reply(mensagem.semPermissãoGuild)}

    if(!args[0]) return message.reply("Coloque um prefixo")

    db.add(`prefix.${message.guild.id}`, args[0])

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