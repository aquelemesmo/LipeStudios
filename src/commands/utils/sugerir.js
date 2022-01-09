const {MessageEmbed} = require("discord.js")
const db = require("quick.db")


module.exports.run = (bot, message, args) => {
    let chx = db.get(`sugestioncanal_${message.guild.id}`)

    const sugerir = args.join(" ")

    if (!sugerir) {
        return message.reply("Coloque alguma sugestão")
    }

    message.delete();

    message.channel.send("Sua sugestão foi enviada!")

        const sugestaoEmbed = new MessageEmbed()
            .setTitle("Nova sugestão foi enviada")
            .setColor("PURPLE")
            .setThumbnail(message.author.displayAvatarURL())
            .addField("Quem sugeriu?", message.author.username)
            .addField("Sugestão", sugerir)
        bot.channels.cache.get(chx).send({embeds: [sugestaoEmbed]})
	
}

module.exports.help = {
    name: "sugerir",
    aliases: ["sugestão", "sugestao"]
}