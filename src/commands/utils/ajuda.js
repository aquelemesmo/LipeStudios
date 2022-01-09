const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")
const botoes = require("../../json/botoesCollectors.json")


module.exports.run = async (bot, message, args) => {

    const row = new MessageActionRow()
    .addComponents(new MessageButton().setStyle('SUCCESS').setCustomId(botoes.ajudaCommand.home).setEmoji("\🏡"))
    .addComponents(new MessageButton().setStyle('SUCCESS').setCustomId(botoes.ajudaCommand.id).setEmoji("\🍃"))
    .addComponents(new MessageButton().setStyle('SUCCESS').setCustomId(botoes.ajudaCommand.id2).setEmoji("\👮"))
    .addComponents(new MessageButton().setStyle('SUCCESS').setCustomId(botoes.ajudaCommand.id3).setEmoji("\💰"))
    .addComponents(new MessageButton().setStyle('SUCCESS').setCustomId(botoes.ajudaCommand.id4).setEmoji("\⚙️"))

    const row2 = new MessageActionRow()
    .addComponents(new MessageButton().setStyle('SUCCESS').setCustomId(botoes.ajudaCommand.id5).setEmoji("\🎮"))
    .addComponents(new MessageButton().setStyle('SUCCESS').setCustomId(botoes.ajudaCommand.id6).setEmoji("<a:minecraft:780777822435672084>"))

    const embed = new MessageEmbed()
        .setColor("PURPLE")
        .setTitle("Meu painel de controle")
        .setThumbnail(bot.user.displayAvatarURL())
        .setDescription("Esse aqui e meu painel de controle onde você pode ver as categorias, e dentro dele tem meus comandos e minhas funcionalidades! Caso você encontrou um bug, reporte usando ``lp!report-bug``\n\nE eu possuo " + bot.commands.size + " comandos!")
        .addFields(
            {name: "> \🍃・Utilidades", value: 'Acessar as categorias utilidades', inline: false},
            {name: "> \👮・Moderação", value: 'Apenas staffs podem usar esse comando', inline: false},
            {name: "> \💰・Economia", value: 'Vamos brincar de economia!', inline: false},
            {name: "> \⚙️・Configuração", value: 'Posso configurar seu servidor para ficar bonito', inline: false},
            {name: "> \🎮・Jogos", value: 'Você pode jogar alguns joguinhos divertidos', inline: false},
            {name: "> <a:minecraft:780777822435672084>・Minecraft", value: 'Mostrar informações sobre o Minecraft!', inline: false}
        )
    await message.reply({embeds: [embed], components: [row, row2]})


    const filtroHome = m => m.customId === botoes.ajudaCommand.home && m.user.id === message.author.id;

    const collectorHome = message.channel.createMessageComponentCollector({filtroHome})

    const filtro = m => m.customId === botoes.ajudaCommand.id && m.user.id === message.author.id;

    const collector = message.channel.createMessageComponentCollector({filtro})

    const filtro2 = m => m.customId === botoes.ajudaCommand.id2 && m.user.id === message.author.id;

    const collector2 = message.channel.createMessageComponentCollector({filtro2})

    const filtro3 = m => m.customId === botoes.ajudaCommand.id3 && m.user.id === message.author.id;

    const collector3 = message.channel.createMessageComponentCollector({filtro3})

    const filtro4 = m => m.customId === botoes.ajudaCommand.id4 && m.user.id === message.author.id;

    const collector4 = message.channel.createMessageComponentCollector({filtro4})

    const filtro5 = m => m.customId === botoes.ajudaCommand.id5 && m.user.id === message.author.id;

    const collector5 = message.channel.createMessageComponentCollector({filtro5})

    const filtro6 = m => m.customId === botoes.ajudaCommand.id6 && m.user.id === message.author.id;

    const collector6 = message.channel.createMessageComponentCollector({filtro6})

    collectorHome.on(`collect`, async m => {
        if(m.customId === 'HomeButton') {
            await m.deferUpdate()
            await m.editReply({embeds: [embed]})
        }
    })

    collector.on(`collect`, async m => {
        if(m.customId === 'UtilsButton') {
            const utilsEmbed = new MessageEmbed()
            .setColor("PURPLE")
            .setTitle("Categoria Úteis")
            .setDescription("`\`\`\ botinfo | help | invite | perfil | mcserver | ping | rep | reportar-bug | sugerir-bot | sugerir | userinfo\`\`\`")
            await m.deferUpdate()
            await m.editReply({embeds: [utilsEmbed]})
        }
    })

    collector2.on(`collect`, async m => {
        if(m.customId === 'ModButton') {
            const modEmbed = new MessageEmbed()
            .setColor("PURPLE")
            .setTitle("Categoria Moderação")
            .setDescription("`\`\`\ ban | kick | mute | unban | unmute | warn \`\`\`")
            await m.deferUpdate()
            await m.editReply({embeds: [modEmbed]})
        }
    })

    collector3.on(`collect`, async m => {
        if(m.customId === 'EcoButton') {
            const ecoEmbed = new MessageEmbed()
            .setColor("PURPLE")
            .setTitle("Categoria Economia")
            .setDescription("`\`\`\ addmoney | daily | depall | hack | removemoney | roubar | work \`\`\`")
            await m.deferUpdate()
            await m.editReply({embeds: [ecoEmbed]})
        }
    })

    collector4.on(`collect`, async m => {
        if(m.customId === 'ConfigButton') {
            const configEmbed = new MessageEmbed()
            .setColor("PURPLE")
            .setTitle("Categoria Configuração")
            .setDescription("`\`\`\ setbooster | setleave | setsugerir | setwelcome \`\`\`")
            await m.deferUpdate()
            await m.editReply({embeds: [configEmbed]})
        }
    })

    collector5.on(`collect`, async m => {
        if(m.customId === 'GameButton') {
            const gameEmbed = new MessageEmbed()
            .setColor("PURPLE")
            .setTitle("Categoria Jogos")
            .setDescription("`\`\`\ chess | poker | snake \`\`\`")
            await m.deferUpdate()
            await m.editReply({embeds: [gameEmbed]})
        }
    })

    collector6.on(`collect`, async m => {
        if(m.customId === 'MinecraftButton') {
            const mcEmbed = new MessageEmbed()
            .setColor("PURPLE")
            .setTitle("Categoria Jogos")
            .setDescription("`\`\`\ mchead | mcserver | mcskin \`\`\`")
            await m.deferUpdate()
            await m.editReply({embeds: [mcEmbed]})
        }
    })
}

module.exports.help = {
    name: "ajuda",
    aliases: ["comandos", "help"],
    description: "Mostra todos os comandos do bot"
}