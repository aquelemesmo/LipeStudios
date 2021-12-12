const {MessageEmbed} = require("discord.js")
const db = require("quick.db")

module.exports = async (bot,member, message) => {
    let canalSet = db.get(`welchannel_${member.guild.id}`)

    if(canalSet === null) {
        return;
    }

    const embed = new MessageEmbed()
    .setTitle(":wave: Seja bem-vindo(a) " + member.user.username)
    .setThumbnail(member.user.displayAvatarURL())
    .setColor("PURPLE")
    .setDescription("Um novo usuário se juntou ao grupo! vamos dar umas boas-vindas. Lembrando ele tem que ser obrigado a ler as regras para ele não ser banido do grupo!")
    bot.channels.cache.get(canalSet).send({embeds: [embed]})
}