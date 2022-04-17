const { MessageEmbed } = require("discord.js")
const config = require("../json/config.json")

module.exports = async (bot, message) => {
    if(message.content === `<@!${bot.user.id}>` || message.content === `<@${bot.user.id}>`) {
        message.channel.send("<@" + message.author.id + ">, oie sou LipeBot :3 quer saber meus comandos? digite ``lp!help``")
    }

    if(message.author.bot || message.type.channel === "dm") return;

    let args = message.content.slice(config.prefix.length).trim().split(/ +/g)
    let command = args.shift().toLowerCase();

    const arquivoCommand = bot.commands.get(command) || bot.commands.get(bot.aliases.get(command))

    try {
        arquivoCommand.run(bot, message, args)
    } catch (e) {
        console.log(e.stack)
    }
}