const { MessageEmbed } = require("discord.js")
const request = require("request")

module.exports.run = async (bot,message,args) => {
    let ip = "redeblazer.synchosting.com"

    request("https://api.mcsrvstat.us/2/" + ip, function (err, responde, body) {
        if(!body) return message.reply("Erro")
        let server = JSON.parse(body);

        const embed = new MessageEmbed()
        if(server.online === false) {
            message.reply("O servidor está off-line no momento.")
        } else {
            embed.setColor("ORANGE")
            embed.setThumbnail(bot.user.displayAvatarURL())
            embed.setTitle("Informações do servidor")
            embed.addField(`> 👥・Jogadores on-line`, `\`\`${server.players.online} / ${server.players.max}\`\``)
            embed.addField(`> 🔩・Versão do servidor `, `\`\`${server.version}\`\``)
            message.reply({embeds: [embed]})
        }
    })  
}

module.exports.help = {
    name: "mcserver",
    aliases: ['status', 'mcstatus']
}