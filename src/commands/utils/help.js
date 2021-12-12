const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let mod = ["`\`\`\ anunciar | ban | kick | mute | ticket \`\`\`"]
    let db = ["`\`\`\ daily | depall | hack | roubar | saldo | work \`\`\`"]
    let utils = ["`\`\`\ form | help | mcserver | ping | reportar | sugestão \`\`\`"]

    const row = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setCustomId("home_button")
        .setLabel("⬅️")
        .setStyle("SUCCESS")
    )

    .addComponents(
        new MessageButton()
        .setCustomId("mod_button")
        .setLabel("👮‍♂️")
        .setStyle("SUCCESS")
    )

    .addComponents(
        new MessageButton()
        .setCustomId("db_button")
        .setLabel("💰")
        .setStyle("SUCCESS")
    )

    .addComponents(
        new MessageButton()
        .setCustomId("utils_button")
        .setLabel("🍃")
        .setStyle("SUCCESS")
    )

    const embed = new MessageEmbed()
    .setColor("ORANGE")
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle("Meu painel de controle")
    .setDescription("Aqui você pode ver todas as minhas funções!")
    .addFields([
        {name: "👮‍♂️・Moderação", value: "Comandos apenas disponível para a staff."},
        {name: "💰・Economia", value: "Quer ser rico no servidor? e porque não quer ser rico aqui?."},
        {name: "🍃・Utilidades", value: "Comandos de diversas utilidades."},
    ])
    message.reply({embeds: [embed], components: [row]})

    let filtro = m => m.customId === "home_button" && m.user.id === message.author.id;

    const collector = message.channel.createMessageComponentCollector({filtro})

    let filtro2 = m => m.customId === "mod_button" && m.user.id === message.author.id;

    const collector2 = message.channel.createMessageComponentCollector({filtro2})

    let filtro3 = m => m.customId === "db_button" && m.user.id === message.author.id;

    const collector3 = message.channel.createMessageComponentCollector({filtro3})

    let filtro4 = m => m.customId === "utils_button" && m.user.id === message.author.id;

    const collector4 = message.channel.createMessageComponentCollector({filtro4})

    collector.on("collect", async m => {
        if(m.customId === "home_button"){
            await m.deferUpate()
            await m.editReply({embeds: [embed]})
        }
    })

    collector2.on("collect", async m => {
        if(m.customId === "mod_button"){
            const modEmbed = new MessageEmbed()
            .setColor("ORANGE")
            .setThumbnail(bot.user.displayAvatarURL())
            .setDescription(mod.join("\n"))
            await m.deferUpate()
            await m.editReply({embeds: [modEmbed]})
        }
    })

    collector3.on("collect", async m => {
        if(m.customId === "db_button"){
            const dbEmbed = new MessageEmbed()
            .setColor("ORANGE")
            .setThumbnail(bot.user.displayAvatarURL())
            .setDescription(db.join("\n"))
            await m.deferUpate()
            await m.editReply({embeds: [dbEmbed]})
        }
    })

    collector4.on("collect", async m => {
        if(m.customId === "utils_button"){
            const utilsEmbed = new MessageEmbed()
            .setColor("ORANGE")
            .setThumbnail(bot.user.displayAvatarURL())
            .setDescription(utils.join("\n"))
            await m.deferUpate()
            await m.editReply({embeds: [utilsEmbed]})
        }
    })
}

module.exports.help = {
    name: "help",
    aliases: ["ajuda", "comandos"]
}