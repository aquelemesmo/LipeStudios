const { MessageEmbed } = require("discord.js")

module.exports = async (bot, guild) => {
    let channel = bot.channels.cache.get("884679184771874846")

    const embed = new MessageEmbed()
    .setColor("PURPLE")
    .setTitle("PAI PAI PAI FUI ADICIONADO!")
    .addFields(
        {name: "Nome do servidor", value: `${guild.name}`},
        {name: "ID do servidor", value: `${guild.id}`},
        {name: "ID dono do servidor", value: `${guild.ownerID}`}
    )
    await channel.send({embeds: [embed]})
}