const { MessageEmbed } = require("discord.js")


module.exports.run = async (bot, message, args) => {
        const embed = new MessageEmbed()
        .setColor("PURPLE")
        .setTitle("Me convide para seu servidor")
        .addFields(
            {name: "Permissão Administrador", value: `> [clique aqui](https://discord.com/oauth2/authorize?client_id=867169426733400104&scope=bot&permissions=8)`},
            {name: "Convidar sem Slash Commands", value: `> [clique aqui](https://discord.com/oauth2/authorize?client_id=867169426733400104&scope=bot&permissions=512847798)`},
            {name: "Convidar com Slash Commands e permissões essenciais", value: `> [clique aqui](https://discord.com/api/oauth2/authorize?client_id=867169426733400104&permissions=512847798&scope=bot%20applications.commands)`},
            {name: "Convidar com Slash Commands e permissão administrador", value: `> [clique aqui](https://discord.com/oauth2/authorize?client_id=867169426733400104&scope=bot%20applications.commands&permissions=8)`}
       )
    
        message.reply({embeds: [embed]})
}

module.exports.help = {
    name: "invite",
    aliases: ["convidar"]
}