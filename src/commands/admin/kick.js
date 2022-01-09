const { MessageEmbed } = require("discord.js")


module.exports.run = async (bot, message, args) => {
    if(!message.member.permissions.has("KICK_MEMBERS")) return message.reply("Você não tem permissão para isso!")
    if(!message.guild.me.permissions.has("KICK_MEMBERS")) return message.reply("Você não tem permissão para isso!")

    let membro = message.mentions.members.first() || message.options.getUser('user')
    let motivo = args.join(" ").slice(22) || message.options.getString('motivo')

    if(!membro) return message.reply("Você esqueceu de mencionar um membro!")
    if(!motivo) return message.reply("Coloque um motivo válido")

    const embed = new MessageEmbed()
    .setTitle("Um usuário foi punido do servidor!")
    .setColor("PURPLE")
    .setThumbnail(membro.user.displayAvatarURL())
    .addFields(
        {name: 'Nome do usuário', value: `${membro.user.username}`},
        {name: 'Motivo', value: `${motivo}`},
        {name: 'Author do punimento', value: `${message.author.tag}`},
        {name: 'Ação do punimento', value: 'Expulso'}
    )
    bot.channels.cache.get(canalSet).send({embeds: [embed]})

    membro.ban({reason: [motivo]})
}

module.exports.help = {
    name: "kick",
    aliases: ["expulsar"],
    description: "Expulsa um usuário do servidor",
    options: [
        {
            name: 'user',
            type: 'USER',
            description: 'Usuário que vai ser punido',
            required: true,
        },
        {
            name: 'motivo',
            type: 'STRING',
            description: 'Motivo do punido',
            required: false,
        }
    ]
}