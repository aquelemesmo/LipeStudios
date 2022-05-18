const { MessageEmbed } = require("discord.js")

module.exports.run = async (bot,message,args) => {
    const embed = new MessageEmbed()
    .setColor("BLUE")
    .setTitle("Vantagens de ter o LipePremium")
    .setDescription("Essas são as vantagens se você der uma quantia para podermos manter o nosso bot online e pagar outras coisas para não perdemos nada relacionada a LipeStudios.")
    .addFields([
        {name: "R$5,00", value: "- Acesso ao nosso bot em Java\n- Acesso aos outros comandos em modo BETA\n- "}
    ])
    message.reply({embeds: [embed]})
}

module.exports.help = {
    name: "beneficios",
    aliases: ["lipepremiumbeneficios"]
}