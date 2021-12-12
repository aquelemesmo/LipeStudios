const { MessageEmbed } = require("discord.js")
const config = require("../json/config.json")

module.exports = async (bot,guild,user) => {
    
    const embed = new MessageEmbed()
    .setColor("ORANGE")
    .setTitle("Seja bem-vindo(a) " + user.username)
    .setDescription("Seja bem-vindo(a) " + user.username + " ao grupo " + guild.name + " leia as regras para não causar nenhum tipo de punimento no servidor!")
    .addField("> Informações", "**IP:** redeblazer.synchosting.com.br\n**Loja:** redeblazer.syncmarket.net")
    .setFooter(config.footer)
    bot.channels.cache.get(config.canais.welcome).send({embeds: [embed]})
}