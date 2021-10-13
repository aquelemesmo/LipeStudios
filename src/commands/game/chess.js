module.exports.run = async (bot, message, args) => {
    if(message.member.voice.channel) {
        bot.discordTogether.createTogetherCode(message.member.voice.channel.id, 'chess').then(async invite => {
            return message.channel.send(`${invite.code}`)
        });
    };
}

module.exports.help = {
    name: "chess",
    aliases: ["xadrez"]
}