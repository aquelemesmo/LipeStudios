const mensagem = require("../../json/mensagem.json")

module.exports.run = async (bot, message, args) => {
    if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply(mensagem.semPermissão)
    if(!message.guild.me.permissions.has("BAN_MEMBERS")) return message.reply(mensagem.semPermissãoGuild)

    const membro = message.mentions.members.first() || bot.users.cache.get(args[0])

    if(!membro) return message.reply("Você esqueceu de mencionar um membro!")

    message.reply("O usuário foi desbanido com sucesso!")

    message.guild.membro.unban(membro.id)
}

module.exports.help = {
    name: "unban",
    aliases: ["desbanir"]
}