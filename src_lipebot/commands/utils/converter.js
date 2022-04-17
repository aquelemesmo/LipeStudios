const currency = require("currency-formatter")
const { MessageEmbed } = require("discord.js")
const mensagem = require("../../json/mensagem.json")

module.exports.run = async (bot,message,args) => {
    let country_coin_sigla = args[0]
    let valor = args[1]

    if(!country_coin_sigla) return message.reply("Insira a sigla da moeda ``Exemplo: BRL``")
    if(!valor) return message.reply(mensagem.inserirValor)

    let converter_sucess = currency.format(valor, {
        code: `${country_coin_sigla}`,
    })

    const embed = new MessageEmbed()
    .setColor("PURPLE")
    .setTitle("Convertor de moedas.")
    .setThumbnail(message.guild.iconURL())
    .setDescription(`Foi convertido por \`\`\`${converter_sucess}\`\`\``)
    message.reply({embeds: [embed]})
}

module.exports.help = {
    name: "converter",
    aliases: ["currency"]
}