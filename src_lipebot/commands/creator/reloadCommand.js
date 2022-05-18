const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
    if(message.author.id !== "401024028388884483") return message.reply("Desculpe, esse comando está só disponível ao meu desenvolvedor")
    if(!args[0]) return message.reply("Coloque o nome da pasta")
    if(!args[1]) return message.reply("Coloque o nome do comando")

    let pasta = args[0].toLowerCase() || message.options.getString("pasta") 
    let command = args[1].toLowerCase() || message.options.getString("arquivo")

    try {
        delete require.cache[require.resolve(`../../commands/${pasta}/${command}.js`)];
        bot.commands.delete(command)

        const pull = require(`../../commands/${pasta}/${command}`)
        bot.commands.set(command, pull)

        const sucessEmbed = new Discord.MessageEmbed()
        .setTitle("SUCESSO!")
        .setColor("PURPLE")
        .setDescription("O comando " + command + " da pasta " + pasta + " foram carregados!")
        message.reply({embeds: [sucessEmbed]})
    } catch (e) {
        return message.channel.send(`Comando indisponível: ${command} \`${e.message}\``)
    }
}

module.exports.help = {
    name: "reload",
    aliases: ["relogar"],
}