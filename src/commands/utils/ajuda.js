const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")

module.exports.run = async (bot, message, args) => {
    const row = new MessageActionRow()
    .addComponents(new MessageButton().setStyle('SUCCESS').setCustomId("HomeButton").setEmoji("\🏡"))
    .addComponents(new MessageButton().setStyle('SUCCESS').setCustomId("UtilsButton").setEmoji("\🍃"))
    .addComponents(new MessageButton().setStyle('SUCCESS').setCustomId("ModButton").setEmoji("\👮"))
    .addComponents(new MessageButton().setStyle('SUCCESS').setCustomId("EcoButton").setEmoji("\💰"))
    .addComponents(new MessageButton().setStyle('SUCCESS').setCustomId("ConfigButton").setEmoji("\⚙️"))

    const row2 = new MessageActionRow()
    .addComponents(new MessageButton().setStyle('SUCCESS').setCustomId("MinecraftButton").setEmoji("<a:minecraft:936629952919502888>"))

    const embed = new MessageEmbed()
        .setColor("PURPLE")
        .setTitle("Meu painel de controle")
        .setThumbnail(bot.user.displayAvatarURL())
        .setDescription("Esse aqui e meu painel de controle onde você pode ver as categorias, e dentro dele tem meus comandos e minhas funcionalidades! Caso você encontrou um bug, reporte usando ``lp!report-bug`` e tenho no total " + bot.commands.size + " comandos")
        .addFields(
            {name: "> \🍃・Utilidades", value: 'Acessar as categorias utilidades', inline: false},
            {name: "> \👮・Moderação", value: 'Apenas staffs podem usar os comando dessa categoria', inline: false},
            {name: "> \💰・Economia", value: 'Vamos brincar de economia!', inline: false},
            {name: "> \⚙️・Configuração", value: 'Posso configurar seu servidor para ficar bonito', inline: false},
            {name: "> <a:minecraft:936629952919502888>・Minecraft", value: 'Mostrar informações sobre o Minecraft!', inline: false}
        )
    await message.reply({embeds: [embed], components: [row, row2]})
}

module.exports.help = {
    name: "ajuda",
    aliases: ["comandos", "help"],
    description: "Mostra todos os comandos do bot"
}