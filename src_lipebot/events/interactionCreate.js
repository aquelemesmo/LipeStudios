const { MessageEmbed } = require("discord.js")
const discordTogether = require("discord-together")

module.exports = async (bot,interaction) => {
    if(!interaction.isButton()) return;
    if(interaction.customId === "HomeButton") {
        const homeEmbed = new MessageEmbed()
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
        await interaction.deferUpdate()
        await interaction.editReply({embeds: [homeEmbed]})
    } else if(interaction.customId === "UtilsButton") {
        const utilsEmbed = new MessageEmbed()
        .setColor("PURPLE")
        .setTitle("Categoria Úteis")
        .setDescription("`\`\`\ ajuda | avatar | botinfo | help | invite | mcserver | ping | reportar-bug | sugerir-bot | sugerir | userinfo\`\`\`")
        await interaction.deferUpdate()
        await interaction.editReply({embeds: [utilsEmbed]})
    } else if(interaction.customId === "ModButton") {
        const modEmbed = new MessageEmbed()
        .setColor("PURPLE")
        .setTitle("Categoria Moderação")
        .setDescription("`\`\`\ ban | kick | mute | unban | unmute | warn \`\`\`")
        await interaction.deferUpdate()
        await interaction.editReply({embeds: [modEmbed]})
    } else if(interaction.customId === "EcoButton") {
        const ecoEmbed = new MessageEmbed()
        .setColor("PURPLE")
        .setTitle("Categoria Economia")
        .setDescription("`\`\`\ daily | depall | hack | perfil | rep | roubar | work \`\`\`")
        await interaction.deferUpdate()
        await interaction.editReply({embeds: [ecoEmbed]})
    } else if(interaction.customId === "ConfigButton") {
        const configEmbed = new MessageEmbed()
        .setColor("PURPLE")
        .setTitle("Categoria Configuração")
        .setDescription("`\`\`\ setbooster | setleave | setsugerir | setwelcome \`\`\`")
        await interaction.deferUpdate()
        await interaction.editReply({embeds: [configEmbed]})
    } else if(interaction.customId === 'MinecraftButton') {
        const mcEmbed = new MessageEmbed()
        .setColor("PURPLE")
        .setTitle("Categoria Jogos")
        .setDescription("`\`\`\ mchead | mcserver | mcskin \`\`\`")
        await interaction.deferUpdate()
        await interaction.editReply({embeds: [mcEmbed]})
    }
}