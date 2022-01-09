module.exports.run = async (bot, message, args) => {
    if(message.author.id !== "401024028388884483") return message.reply("Desculpe, esse comando está só disponível ao meu desenvolvedor")

    message.delete()

    message.channel.send(args.join(" "))
}

module.exports.help = {
    name: "say",
    aliases: ["falar"]
}