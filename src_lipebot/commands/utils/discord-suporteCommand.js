module.exports.run = async (bot,message,args) => {
    message.reply("Enviei meu Discord para você em seu privado!")

    message.author.send("> Ei, ei! necessita de suporte?\n\nhttps://discord.gg/ppf9XjdenB").catch(e => {
        message.reply("Não consegui enviar meu Discord para você em seu privado :c")
        console.log(e)
    })
}

module.exports.help = {
    name: "discord-suporte",
    aliases: ["suporte-discord"]
}