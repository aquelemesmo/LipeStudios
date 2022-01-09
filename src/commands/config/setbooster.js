const db = require("quick.db")
const { MessageEmbed } = require("discord.js")

module.exports.run = async (bot,message,args) => {
    if(!message.member.permissions.has("MANAGE_SERVER")) {return message.reply("Você não tem permissão para fazer isso")}

    let channel = message.mentions.channels.first() || message.options.getChannel('canal')
    
    db.set(`boostchannel_${message.guild.id}`, channel.id)

    const embed = new MessageEmbed()
    .setColor("PURPLE")
    .setTitle("Sucesso!")
    .setDescription("Adicionado mensagem de boost no canal: " + channel.name)
    message.reply({embeds: [embed]})
}

module.exports.help = {
    name: "setbooster",
    aliases: ["setboost"],
    description: "Define o canal de texto para receber mensagens de boost",
    options: [
        {
            name: 'canal',
            description: 'O canal de texto para receber mensagens de boost',
            type: 'CHANNEL',
            required: true
        }
    ]
}