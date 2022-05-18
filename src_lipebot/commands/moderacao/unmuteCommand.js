const config = require("../../json/config.json")

module.exports.run = async (bot, message, args) => {
    if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply(config.mensagem.semPermissão)
    if(!message.guild.me.permissions.has("MANAGE_MESSAGES")) return message.reply(config.mensagem.semPermissãoGuild)

        const membro = message.mentions.members.first() || message.options.getUser('user')

    const cargo = message.roles.cache.find(r => r.name === "Silenciado")

    message.reply("O usuário foi desmutado com sucesso!")

    membro.roles.remove(cargo)
}

module.exports.help = {
    name: "mute",
    aliases: ["silenciar"],
}