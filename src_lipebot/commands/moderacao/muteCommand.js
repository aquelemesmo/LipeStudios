const config = require("../../json/config.json")
const { MessageEmbed } = require("discord.js")

module.exports.run = async (bot, message, args) => {
    if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply(config.mensagem.semPermissão)
    if(!message.guild.me.permissions.has("MANAGE_MESSAGES")) return message.reply(config.mensagem.semPermissãoGuild)

    const membro = message.mentions.members.first() || message.options.getUser('user')
    const motivo = args.join(" ").slice(22) || message.options.getString('motivo')
    const cargo = message.roles.cache.find(r => r.name === "Silenciado")

    if(!membro) return message.reply("Você esqueceu de mencionar um membro!")
    if(!motivo) return message.reply("Coloque um motivo válido")

    const embed = new MessageEmbed()
    .setTitle("Um usuário foi punido do servidor!")
    .setThumbnail(membro.user.displayAvatarURL())
    .setColor("PURPLE")
    .addFields(
        {name: 'Nome do usuário', value: `${membro.user.username}`},
        {name: 'Motivo', value: `${motivo}`},
        {name: 'Author do punimento', value: `${message.author.tag}`},
        {name: 'Ação do punimento', value: 'Silenciamento eterno'}
    )
    if(membro.roles.highest.rawPosition >= message.guild.me.roles.highest.rawPosition) {
        return message.reply("Essa pessoa tem cargo muito alto que o meu :c")
    } else {
        membro.send({embeds: [embed]})
        membro.ban({reason: [motivo]})
        message.reply("O membro foi punido com sucesso!")
    }

    membro.roles.add(cargo)
}

module.exports.help = {
    name: "mute",
    aliases: ["silenciar"],
}