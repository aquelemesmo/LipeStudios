const { MessageEmbed } = require("discord.js")

module.exports.run = async (bot,message,args) => {
    const embed = new MessageEmbed()
    .setColor("PURPLE")
    .setTitle("รcone do servidor " + message.guild.name)
    .setImage(message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    message.reply({embeds: [embed]}).then(msg => {
        msg.react('๐')
        msg.react('๐')
    })
}   

module.exports.help = {
    name: "servericon",
    aliases: ["iconserver"]
}