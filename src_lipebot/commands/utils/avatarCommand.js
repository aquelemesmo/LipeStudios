const { MessageEmbed } = require("discord.js");
const config = require("../../json/config.json")

module.exports.run = async (bot,message,args) => {
    const membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    if(!membro) return message.reply(config.mensagem.mencionarMembro)

    const embed = new MessageEmbed()
    .setColor("PURPLE")
    .setTitle("Avatar do " + membro.user.username)
    .setDescription(`[Clique aqui](${membro.user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'})}) para baixar o avatar!`)
    .setImage(membro.user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    message.reply({embeds: [embed]})
}

module.exports.help =  {
    name: "avatar",
    aliases: ["av"],
}