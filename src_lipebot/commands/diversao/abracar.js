const { MessageEmbed } = require("discord.js")

module.exports.run = async (bot,message,args) => {
    const membro = message.mentions.members.first()

    if(!membro) return message.reply('Mencione um membro para ser beijado!')

    let title = [
        "Ta começando a esquentar o clima...",
        "Se tivesse beijinho ja eu shippava"
    ]

    let img = [
        "https://c.tenor.com/SPs0Rpt7HAcAAAAM/chiya-urara.gif",
        "https://i.pinimg.com/originals/f2/80/5f/f2805f274471676c96aff2bc9fbedd70.gif",
        "https://i.pinimg.com/originals/a4/13/4f/a4134f06e210a7540ca20ae165dc457f.gif",
        "http://25.media.tumblr.com/tumblr_ma7l17EWnk1rq65rlo1_500.gif",
        "https://c.tenor.com/jQ0FcfbsXqIAAAAC/hug-anime.gif",
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
    .setDescription(`${message.author.username} abraçou <@${membro.user.id}>`)
    message.reply({embeds: [embed]})
}

module.exports.help = {
    name: "abracar",
    aliases: ["abraçar", "abraço"]
}