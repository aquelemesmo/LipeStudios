const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports.run = async (bot,message,args) => {
    const membro = message.mentions.members.first() || message.options.getUser('user')
    const motivo = args.join(" ").slice(22)

    let rep = await db.fetch(`rep_${message.guild.id}_${membro.id}`)

    if(!membro) return message.reply("Mencione um membro")
    if(!motivo) return message.reply("Coloque um motivo")

    message.reply("Você deu reputação para " + membro.user.username + " e agora ele possui " + rep)
    db.add(`rep_${message.guild.id}_${membro.id}`, 1)
}

module.exports.help = {
    name: "rep",
    aliases: ["reputação"],
    description: "De reputação a um membro",
    options: [
        {
            name: 'user',
            type: 'USER',
            description: 'Usuário que vai ser banido',
            required: true,
        }
    ]
}