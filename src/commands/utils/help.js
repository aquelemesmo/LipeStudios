const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")

module.exports.run = async (bot, message, args) => {
    const row = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setStyle('SECONDARY')
        .setCustomId('button')
        .setEmoji("🍃")
    )
    
    .addComponents(
        new MessageButton()
        .setStyle('SECONDARY')
        .setCustomId('ModButton')
        .setEmoji("👮")
    )

    .addComponents(
        new MessageButton()
        .setStyle('SECONDARY')
        .setCustomId('EcoButton')
        .setEmoji("💰")
    )

    .addComponents(
        new MessageButton()
        .setStyle('SECONDARY')
        .setCustomId('ConfigButton')
        .setEmoji("⚙️")
    )

    .addComponents(
        new MessageButton()
        .setStyle('SECONDARY')
        .setCustomId('GameButton')
        .setEmoji("🎮")
    )

    const embed = new MessageEmbed()
    .setColor("PURPLE")
    .setTitle("Meu painel de controle")
    .setThumbnail(bot.user.displayAvatarURL())
    .addFields(
        {name: "🍃・Utilidades", value: 'Acessar as categorias utilidades', inline: false},
        {name: "👮・Moderação", value: 'Apenas staffs podem usar esse comando', inline: false},
        {name: "💰・Economia", value: 'Vamos brincar de economia!', inline: false},
        {name: "⚙️・Configuração", value: 'Posso configurar seu servidor para ficar bonito', inline: false},
        {name: "🎮・Jogos", value: 'Você pode jogar alguns joguinhos divertidos', inline: false}
    )

    await message.reply({embeds: [embed], components: [row]})

    const filtro = m => m.customId === 'button' && m.user.id === message.author.id;

    const collector = message.channel.createMessageComponentCollector({filtro, time: 120000})

    const filtro2 = m => m.customId === 'ModButton' && m.user.id === message.author.id;

    const collector2 = message.channel.createMessageComponentCollector({filtro2, time: 120000})

    const filtro3 = m => m.customId === 'EcoButton' && m.user.id === message.author.id;

    const collector3 = message.channel.createMessageComponentCollector({filtro3, time: 120000})

    const filtro4 = m => m.customId === 'ConfigButton' && m.user.id === message.author.id;

    const collector4 = message.channel.createMessageComponentCollector({filtro4, time: 120000})

    const filtro5 = m => m.customId === 'GameButton' && m.user.id === message.author.id;

    const collector5 = message.channel.createMessageComponentCollector({filtro5, time: 120000})

    collector.on(`collect`, async m => {
        if(m.customId === 'button') {
            const utilsEmbed = new MessageEmbed()
            .setColor("PURPLE")
            .setTitle("Categoria Úteis")
            .setDescription("`\`\`\ botinfo | help | invite | mcserver | ping | reportar-bug | sugerir-bot | sugerir | userinfo \`\`\`")
            await m.deferUpdate()
            await m.editReply({embeds: [utilsEmbed]})
        }
    })

    collector2.on(`collect`, async m => {
        if(m.customId === 'ModButton') {
            const utilsEmbed = new MessageEmbed()
            .setColor("PURPLE")
            .setTitle("Categoria Moderação")
            .setDescription("`\`\`\ ban | kick | mute | unban\`\`\`")
            await m.deferUpdate()
            await m.editReply({embeds: [utilsEmbed]})
        }
    })

    collector3.on(`collect`, async m => {
        if(m.customId === 'EcoButton') {
            const utilsEmbed = new MessageEmbed()
            .setColor("PURPLE")
            .setTitle("Categoria Economia")
            .setDescription("`\`\`\ aprender | daily | depall | dirigir | saldo | work\`\`\`")
            await m.deferUpdate()
            await m.editReply({embeds: [utilsEmbed]})
        }
    })

    collector4.on(`collect`, async m => {
        if(m.customId === 'ConfigButton') {
            const utilsEmbed = new MessageEmbed()
            .setColor("PURPLE")
            .setTitle("Categoria Configuração")
            .setDescription("`\`\`\ setleave | setpunição | setwelcome \`\`\`")
            await m.deferUpdate()
            await m.editReply({embeds: [utilsEmbed]})
        }
    })

    collector5.on(`collect`, async m => {
        if(m.customId === 'GameButton') {
            const utilsEmbed = new MessageEmbed()
            .setColor("PURPLE")
            .setTitle("Categoria Jogos")
            .setDescription("`\`\`\ chess | poker \`\`\`")
            await m.deferUpdate()
            await m.editReply({embeds: [utilsEmbed]})
        }
    })
}

module.exports.help = {
    name: "help",
    aliases: ["comandos", "ajuda"]
}