const { MessageEmbed } = require("discord.js")
const weather = require("weather-js")

module.exports.run = async (bot,message,args) => {
    const localizacao = args.join(" ")

    if(!localizacao) return message.reply("Você precisa informar uma localização para pesquisar")

    weather.find({search: localizacao, degreeType: 'C'}, function(err, result) {
        if(err) console.error(err)

        const resultEmbed = new MessageEmbed()
        .setColor("PURPLE")
        .setTitle("Previsão do tempo para " + result[0].location.name)
        .addField("> :thermometer:・Temperatura", `${result[0].current.temperature}°C`, true)
        .addField("> :sunny:・Temp. máxima", `${result[0].forecast[0].high}°C`, true)
        .addField("> :ice_cube:・Temp. mínima", `${result[0].forecast[0].low}°C`, true)
        .addField("> :leaves:・Umidade", `${result[0].current.humidity}%`, true)
        .addField("> :cloud:・Vento", `${result[0].current.winddisplay}`, true)
        .addField("> :clock2:・Atualizado em", `${result[0].current.observationtime}`, true)
        message.reply({embeds: [resultEmbed]})
    })
}

module.exports.help = {
    name: "temperatura",
    aliases: ["time"]
}