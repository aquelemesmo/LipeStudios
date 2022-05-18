const { MessageEmbed } = require("discord.js")

module.exports.run = async (bot,message,args) => {

    const embed = new MessageEmbed()
    .setColor("PURPLE")
    .setTitle("Notícias - 04/04/2022")
    .setDescription("<:blurple_plus:960396804485177394>・Adicionado novo comando ``lp!noticias``\n<:menos:960397764448112720>・Removido eventos (entrada/saida) para membros temporariamente\n<:blurple_staff:960397855925887016>・Corrigido bugs dos comandos e dos eventos",)
    .setFooter(`Notícias postadas pelos membros da LipeStudios`, bot.user.displayAvatarURL())
    message.reply({embeds: [embed]})
}

module.exports.help = {
    name: "noticias",
    aliases: ["notice", "noticia"]
}