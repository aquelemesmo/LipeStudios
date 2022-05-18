const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")

module.exports.run = async (bot, message, args) => {
    const row = new MessageActionRow()
    .addComponents(new MessageButton().setCustomId("voz").setLabel("Música por canal").setStyle("SUCCESS"))
    .addComponents(new MessageButton().setCustomId("together").setLabel("Música por together").setStyle("SUCCESS"))

    const embed = new MessageEmbed()
    .setColor("PURPLE")
    .setDescription("Qual o tipo de música você irá querer?")
    message.reply({embeds: [embed], components: [row]})    

    const filtro = m => m.author.id === message.author.id

    const collector = message.channel.createMessageComponentCollector(filtro)

    collector.on("collect", async m => {
        if(m.customId === "together") {
            if(message.member.voice.channel) {
                bot.discordTogether.createTogetherCode(message.member.voice.channel.id, 'youtube').then(async invite => {
                    return message.channel.send(`${invite.code}`);
                });
            };
        }
    })

}

module.exports.help = {
    name: "play",
    aliases: ["tocar"]
}