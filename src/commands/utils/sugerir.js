const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = (bot, message, args) => {
    let chx = db.get(`sugestioncanal_${message.guild.id}`)

    const sugerir = args.join(" ")

    if (!sugerir) {
        return message.reply("Coloque alguma sugestão")
    }

    message.delete();

    message.channel.send("Sua sugestão foi enviada!")

    const sugestaoEmbed = new Discord.MessageEmbed()
        .setTitle("Nova sugestão")
        .setColor("PURPLE")
        .setAuthor(bot.user.displayAvatarURL())
        .addField("Quem sugeriu?", message.author.username)
        .addField("Sugestão", sugerir)
    bot.channels.cache.get(chx).send(sugestaoEmbed)
}

module.exports.help = {
    name: "sugerir",
    aliases: ["sugestão", "sugestao"]
}