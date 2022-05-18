const {MessageEmbed} = require("discord.js")
const config = require("../../json/config.json")


module.exports.run = async (bot, message, args) => {
    let sugestao = args.join(" ")
    
    if(!sugestao) {
        return message.reply("Você não colocou nenhuma sugestão");
    }

    message.delete();

    message.channel.send(message.author.tag + " sua sugestão foi enviada com sucesso!")
    
    let channel = bot.channels.cache.get(config.canais.canal_sugerir_bot)
    
    const embed = new MessageEmbed()
    .setTitle("Nova sugestão!")
    .setColor("PURPLE")
    .setThumbnail(message.author.displayAvatarURL())
    .addField("Nome do usuário", message.author.username)
    .addField("Sugestão", sugestao)
    await channel.send({embeds: [embed]})
}

module.exports.help = {
    name: "sugerir-bot",
    aliases: ["sugestion-bot"]
}