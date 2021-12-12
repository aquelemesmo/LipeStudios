module.exports.run = async (bot,message,args) => {
    message.reply("Meu ping e " + bot.ws.ping)
}

module.exports.help = {
    name: "ping",
    aliases: ["lantencia"]
}