const { MessageEmbed } = require("discord.js")

module.exports.run = async (bot, message, args) => {
    const embed = new MessageEmbed()
    .setColor("PURPLE")
    .setTitle("Me convide para seu servidor")
    .addFields(
        {name: "Convidar sem Slash Commands", value: `> [clique aqui](https://discord.com/oauth2/authorize?client_id=867169426733400104&scope=bot&permissions=512847798)`}
    )

    message.reply({embeds: [embed]})
}

module.exports.help = {
    name: "invite",
    aliases: ["convidar"]
}