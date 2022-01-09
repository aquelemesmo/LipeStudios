const { MessageEmbed } = require("discord.js")


module.exports.run = async (bot, message, args) => {
    if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply("Você não tem permissão para isso!")
    if(!message.guild.me.permissions.has("BAN_MEMBERS")) return message.reply("Você não tem permissão para isso!")

    let membro = message.mentions.members.first() || message.options.getUser('user')
    let motivo = args.join(" ").slice(22) || !message.options.getString('motivo') ? "Sem motivo defenido":message.options.getString('motivo')

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
    description: "Banir um membro do servidor",
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