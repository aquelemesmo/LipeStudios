const { MessageEmbed } = require("discord.js")
const config = require("../json/config.json")

module.exports = async (bot, message) => {
    let channel = bot.channels.cache.get("889313706788405299") //canal de erro
    
    if (message.author.bot) return;
    if (message.type.channel === "dm") return;
    if (message.content.indexOf(".") == 0);
    if (message.content.indexOf(config.prefix) !== 0) return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ")
    let args = message.content.slice(prefix.length).trim().split(/ +/g)
    let command = args.shift().toLowerCase();
    let arquivoCommand = [];

    if (bot.commands.has(command)) {
        arquivoCommand = bot.commands.get(command)
    } else if (bot.aliases.has(command)) {
        arquivoCommand = bot.commands.get(bot.aliases.get(command))
    }

    try {
        arquivoCommand.run(bot, message, args)
    } catch (e) {
        const embed = new MessageEmbed()
    		.setTitle("Erro detectado.")
  			.setColor("RED")
  			.setDescription(e.stack)
        await channel.send({embeds: [embed]})
    }
}