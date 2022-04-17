const mensagem = require("../../json/mensagem.json")
const { MessageEmbed } = require("discord.js")

module.exports.run = async (bot, message, args) => {
    if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply(mensagem.semPermissão)
    if(!message.guild.me.permissions.has("BAN_MEMBERS")) return message.reply(mensagem.semPermissãoGuild)

    let membro = message.mentions.members.first()
    let motivo = args.join(" ").slice(22)

    if(!membro) return message.reply("Você esqueceu de mencionar um membro!")
    
    const embed = new MessageEmbed()
    .setTitle("Você foi punido do grupo " + message.guild.name + " e abaixo mostra as informações.")
    .setThumbnail(message.guild.iconURL())
    .setColor("PURPLE")
    .addFields(
        {name: 'Author do punimento', value: `${message.author.tag}`},
        {name: 'Motivo', value: `${motivo}`},
        {name: 'Ação do punimento', value: 'Banimento eterno'}
    )
    if(membro.roles.highest.rawPosition >= message.guild.me.roles.highest.rawPosition) {
        return message.reply("Essa pessoa tem cargo muito alto que o meu :c")
    } else {
        membro.send({embeds: [embed]})
        membro.ban({reason: [motivo]})
        message.reply("O membro foi punido com sucesso!")
    }
}

module.exports.help = {
    name: "ban",
    aliases: ["banir"],
}