const { MessageEmbed } = require("discord.js")


module.exports.run = async (bot, message, args) => {
    if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("Você não tem permissão para isso!")
    if(!message.guild.me.permissions.has("MANAGE_MESSAGES")) return message.reply("Você não tem permissão para isso!")

    const membro = message.mentions.members.first() || message.options.getUser('user')
    const motivo = args.join(" ").slice(22) || message.options.getString('motivo')

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
        {name: 'Ação do punimento', value: 'Aviso'}
    )
    bot.channels.cache.get(canalSet).send({embeds: [embed]})
}

module.exports.help = {
    name: "warn",
    aliases: ["avisar"],
    description: "Avisa um usuário do servidor",
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