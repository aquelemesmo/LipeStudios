const { MessageEmbed } = require("discord.js")

module.exports.run = async (bot, message, args) => {
    const membro = message.mentions.members.first() || message.member
    const emblemas = []
    const banner = await bot.api.users(membro.user.id).get()
    if(membro.user.avatar.startsWith("a_") || banner.banner) {
        emblemas.push("NITRO")
    }

    membro.user.flags.toArray().map(x => emblemas.push(x))

    let infouser = [
        `> <:discord:813438382428389457>・Nome: ${membro.user.username}`,
        `> :1234:・Discriminator: ${membro.user.discriminator}`,
        `> :id:・ID: ${membro.user.id}`,
        `> :clock2:・Conta criada em: <t:${Math.round(new Date(membro.user.createdAt) / 1000)}:f>`,
        `> :clock2:・Entrou nesse grupo em: <t:${Math.round(new Date(membro.joinedAt) / 1000)}:f>`,
        `> <:moderacao:780247787891720232>・Emblema: ${emblemas.join(", ")}`,
        `> :robot:・É um bot? ${membro.user.bot ? "Sim" : "Não"}`,
    ]

    const embed = new MessageEmbed()
    .setColor("PURPLE")
    .addField(`Informações do usuário ${membro.user.username}`, infouser.join('\n'))

    message.reply({embeds: [embed]})
}

module.exports.help = {
    name: "userinfo",
    aliases: ["infouser"]
}