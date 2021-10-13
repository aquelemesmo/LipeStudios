const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.member.voice.channel) {
        bot.discordTogether.createTogetherCode(message.member.voice.channel.id, 'youtube').then(async invite => {
            const embed = new MessageEmbed()
            .setColor("PURPLE")
            .setDescription(`Caso não tenha percebido, mas agora não terei sistema de música via canais de voz por causa dos direitos do YouTube, agora temos o YouTube Together! [clique aqui](${invite.code})`)
            return message.channel.send({embeds: [embed]})
        });
    };
}

module.exports.help = {
    name: "play",
    aliases: ["tocar"]
}