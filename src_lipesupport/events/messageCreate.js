module.exports = async (bot,message) => {
    if(message.author.bot || message.type.channel === "dm") return;

    let prefix = "lsp!"
    let args = message.content.slice(prefix.length).trim().split(/ +/g)
    let command = args.shift().toLowerCase();

    const arquivoCommand = bot.commands.get(command)

    try {
        arquivoCommand.run(bot, message, args)
    } catch (e) {
        console.log(e.stack)
    }
}