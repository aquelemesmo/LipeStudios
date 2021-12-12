const mensagem = require("../../json/mensagem.json")

module.exports.run = async (bot,message,args) => {
    if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply(mensagem.sem_permissao)
    if(!message.guild.me.permissions.has("BAN_MEMBERS")) return message.reply(mensagem.sem_permissao_bot)

    const membro = message.mentions.members.first()
    const motivo = args.join(" ").slice(22)

    if(!membro) return message.reply(mensagem.mencionar_membro)
    if(!motivo) return message.reply(mensagem.colocar_motivo)

    let channel = bot.channels.cache.get("895852308880056360")

    const embed = new MessageEmbed()
    .setColor("RED")
    .setThumbnail('https://cdn-icons.flaticon.com/png/512/4067/premium/4067568.png?token=exp=1635463497~hmac=92301c02c63b65d43d048bd725d04400')
    .setTitle("Uma nova punição foi encontrada!")
    .addFields([
        {name: "Nome do usuário", value: `${membro.user.username}`},
        {name: "Author do punimento", value: `${message.author.username}`},
        {name: "Motivo da punição", value: `${motivo}`},
        {name: "Ação do punimento", value: "Banimento eterno"}
    ])

    await channel.send({embeds: [embed]})

    membro.ban({reason: [motivo]})
}

module.exports.help = {
    name: "ban",
    aliases: ["banir"]
}