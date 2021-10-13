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
        `> Nome: ${membro.user.username}`,
        `> Discriminator: ${membro.user.discriminator}`,
        `> ID: ${membro.user.id}`,
        `> Data criada: <t:${Math.round(new Date(membro.user.createdAt) / 1000)}:f>`,
        `> Entrou em: <t:${Math.round(new Date(membro.joinedAt) / 1000)}:f>`,
        `> Emblema: ${emblemas.join(", ")}`,
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