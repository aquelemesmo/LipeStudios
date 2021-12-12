const { MessageEmbed } = require("discord.js")

module.exports.run = async (bot,message,args) => {
    let channel = bot.channels.cache.get("895858399642808410")
    const sugestao = args.join(" ")

    if(!sugestao) return message.reply("Coloque uma sugestão")

    message.delete();

    message.channel.send("Sua sugestão foi enviada para o pessoal análisar!")

    const embed = new MessageEmbed()
    .setColor("ORANGE")
    .setTitle("Nova sugestão foi enviada!")
    .addFields([
        {name: "Usuário que enviou a sugestão: " , value: message.author.username},
        {name: "Sugestão: " , value: sugestao},
    ])
    await channel.send({embeds: [embed]}).then(msg => {
        msg.react(`<:check:796247404117491722>`)
        msg.react(`<:errado:796248098715861032>`)
    })
}

module.exports.help = {
    name: "sugestão",
    aliases: ["sugerir"]
}