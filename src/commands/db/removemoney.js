const mensagem = require("../../json/mensagem.json")
const cor = require("../../json/cor.json")
const db = require("quick.db")
const { MessageEmbed } = require("discord.js")

module.exports.run = async (bot, message, args) => {
    if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply(mensagem.semPermissão)
    if(!message.guild.me.permissions.has("ADMINISTRATOR")) return message.reply(mensagem.semPermissãoGuild)

        const membro = message.mentions.members.first() || message.options.getUser('user')
 || message.guild.members.get(args[0]) || message.options.getUser('membro')

    if(!membro) return message.reply(mensagem.mencionarMembro)

    if(!args[1]) return message.reply(mensagem.inserirValor)

    const embed = new MessageEmbed()
    .setColor(cor.roxo)
    .setTitle("Sucesso!")
    .setDescription("Foi removido " + args[1] + " para " + membro.user.username)
    message.reply({embeds: [embed]})
    db.subtract(`moedinhas_${message.guild.id}_${membro.id}`, args[1])

}

module.exports.help = {
    name: "removemoney",
    aliases: ["removermoney"],
    description: "Remover dinheiro a um membro",
    options: [
        {
            name: 'membro',
            type: "USER",
            description: "Membro que você quer adicionar dinheiro",
            required: true,
        },
        {
            name: "valor",
            type: "STRING",
            description: "Valor que você quer adicionar",
            required: true,
        }
    ]
}