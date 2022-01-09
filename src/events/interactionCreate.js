module.exports = async (bot, interaction) => {
    if(!interaction.isCommand()) return;

    const arquivoCommand = bot.commands.get(interaction.commandName) || bot.commands.get(bot.aliases.get(interaction.commandName))
    
    if(arquivoCommand) {
        arquivoCommand.run(bot, interaction)
    }
}