const { Database } = require("simpl.db")
const db = require("quick.db")

module.exports.run = async (bot,message,args) => {
    if(!message.member.permissions.has("MANAGE_SERVER")) return message.reply(config.mensagem.semPermissão)
    if(!message.guild.me.permissions.has("MANAGE_SERVER")) return message.reply(config.mensagem.semPermissãoGuild)

    let channel = message.mentions.channels.first() || args[0]

    if(!channel) return message.reply("Você tem que mencionar um canal de texto!")
    
    db.set(`leavechannel_${message.guild.id}`, channel.id)

    const embed = new MessageEmbed()
    .setColor("PURPLE")
    .setTitle("Sucesso!")
    .setDescription("Adicionado mensagem de saída no canal: " + channel.name)
    message.reply({embeds: [embed]})
}

module.exports.help = {
    name: "setsaida",
    aliases: ["setleave"]
}