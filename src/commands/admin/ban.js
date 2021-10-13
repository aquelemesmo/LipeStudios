const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports.run = async (bot, message, args) => {
    if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply("Você não tem permissão para isso!")
    if(!message.guild.me.permissions.has("BAN_MEMBERS")) return message.reply("Você não tem permissão para isso!")

    const membro = message.mentions.members.first()
    const motivo = args.join(" ").slice(22)

    let canalSet = db.get(`punichannel_${message.guild.id}`)

    if(canalSet === null) {
        return;
    }

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
        {name: 'Ação do punimento', value: 'Banimento eterno'}
    )
    bot.channels.cache.get(canalSet).send({embeds: [embed]})

    membro.ban({reason: [motivo]})
}

module.exports.help = {
    name: "ban",
    aliases: ["banir"]
}