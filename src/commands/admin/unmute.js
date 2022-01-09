

module.exports.run = async (bot, message, args) => {
    if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("Você não tem permissão para isso!")
    if(!message.guild.me.permissions.has("MANAGE_MESSAGES")) return message.reply("Você não tem permissão para isso!")

        const membro = message.mentions.members.first() || message.options.getUser('user')

    const cargo = message.roles.cache.find(r => r.name === "Silenciado")

    message.reply("O usuário foi desmutado com sucesso!")

    membro.roles.remove(cargo)
}

module.exports.help = {
    name: "mute",
    aliases: ["silenciar"],
    description: "Retirar o mute um usuário do servidor",
    options: [
        {
            name: 'user',
            type: 'USER',
            description: 'Usuário que vai ser punido',
            required: true,
        },
    ]
}