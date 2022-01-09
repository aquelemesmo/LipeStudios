const { MessageEmbed } = require("discord.js")
const request = require("request")


module.exports.run = async (bot, message, args) => {
    let ip = args[0]
    if(!ip) return message.reply("Coloque o IP de algum servidor")

    request(`https://api.mcsrvstat.us/2/${ip}`, function (error, response, body) {
        if(!body) return message.reply(`Erro.`);
        let server = JSON.parse(body)

        const embed = new MessageEmbed()
                embed.setTitle(`Informações do servidor ${ip}`)
                embed.setColor("PURPLE")
                embed.addField(`🔭・IP númerico`, `${server.ip}:${server.port} `)
                embed.addField(`🎲・Status`, `On-line` || `Off-line`)
                embed.addField(`👥・Jogadores on-line`, `${server.players.online} / ${server.players.max}`)
                embed.addField(`🔩・Versão do servidor `, server.version)
                embed.addField(`💻・Hostname`, server.hostname || 'Não definido.')
                message.reply({embeds: [embed]})
    })
}

module.exports.help = {
    name: "mcserver",
    aliases: ["server"]
}