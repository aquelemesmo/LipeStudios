const { MessageEmbed } = require("discord.js")
const config = require("../../json/config.json")

module.exports.run = async (bot,message,args) => {
    if(message.author.id !== config.ids.jack) {return message.reply("Você não pode usar esse comando. Só e liberado pelo desenvolvedor do bot!")}

    let pasta = args[0].toLowerCase()
    let arquivo = args[1].toLowerCase()

    try {
        delete require.cache[require.resolve(`../../commands/${pasta}/${arquivo}`)]
        bot.commands.delete(arquivo)

        const pull = require(`../../commands/${pasta}/${arquivo}`)
        bot.commands.set(arquivo, pull)

        message.channel.send("Recarregando... " + pasta + "/" + arquivo).then(msg => {
            setTimeout(() => {
                msg.edit("Recarregado! " + pasta + "/" + arquivo)
            }, 3000);
        })
    } catch(e) {
        console.log(e.message)
    }
}

module.exports.help = {
    name: "reload",
    aliases: ["relogar", "cmdreload"]
}