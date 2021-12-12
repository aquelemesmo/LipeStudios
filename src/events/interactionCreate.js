const { MessageEmbed } = require("discord.js");
const cor = require("../json/cor.json")

module.exports = async (bot, interaction) => {
    if(!interaction.isCommand()) return;

    const arquivoCommand = bot.commands.get(interaction.commandName) || bot.commands.get(bot.aliases.get(interaction.commandName));

    let args = [];
    arquivoCommand.run(bot, interaction, args).catch (e => {
        const errorSlashEmbed = new MessageEmbed()
        .setColor(cor.roxo)
        .addField(`Comando: ${interaction.commandName}\n`, e.message)
        bot.channels.cache.get("889313706788405299").send({embed: [errorSlashEmbed]})
    })
}