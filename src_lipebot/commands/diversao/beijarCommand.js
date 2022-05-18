const { MessageEmbed } = require("discord.js")
const config = require("../../json/config.json")

module.exports.run = async (bot,message,args) => {
    const membro = message.mentions.members.first()

    if(!membro) return message.reply(config.mensagem.mencionarMembro)

    let title = [
        "Que beijinho lindo em, vai rolar outro não?",
        "Shippo muito, vai ser um novo casal!!"
    ]

    let img = [
        "https://c.tenor.com/G954PGQ7OX8AAAAM/cute-urara-shiraishi-anime.gif",
        "https://c.tenor.com/9vycr5sUYBMAAAAM/eden-of-the-east-anime.gif",
        "https://c.tenor.com/ErAPuiWY46QAAAAM/kiss-anime.gif",
        "https://c.tenor.com/etSTc3aWspcAAAAM/yuri-kiss.gif",
        "https://c.tenor.com/e6cYiAPPCq4AAAAM/anime-kissing.gif",
    ]
    
    let random_image = img[Math.floor(Math.random() * img.length)]
    let random_title = title[Math.floor(Math.random() * title.length)]

    const embed = new MessageEmbed()
    .setColor("PURPLE")
    .setTitle(random_title)
    .setThumbnail(message.author.displayAvatarURL())
    .setImage(random_image, {
        dynamic: true,
        size: 1024,
    })
    .setDescription(`${message.author.username} beijou <@${membro.user.id}>`)
    message.reply({embeds: [embed]})
}

module.exports.help = {
    name: "beijar",
    aliases: ["kiss", "beijo"]
}