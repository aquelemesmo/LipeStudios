const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports.run = async (bot, message, args) => {
    if(!message.member.permissions.has("MANAGE_SERVER")) {return message.reply("Você não tem permissão para fazer isso")}

    let channel = message.mentions.channels.first() || args[0]

    if(!channel) {return message.reply("Você tem que mencionar um canal de texto!")}
    
    db.set(`punichannel_${message.guild.id}`, channel.id)

    console.log(db.set(`punichannel_${message.guild.id}`, channel.id))

    const embed = new MessageEmbed()
    .setColor("PURPLE")
    .setTitle("Sucesso!")
    .setDescription("Adicionado mensagem de punição no canal: " + channel.name)
    message.reply({embeds: [embed]})
}

module.exports.help = {
    name: "setpunição",
    aliases: ["setpunimento"]
}