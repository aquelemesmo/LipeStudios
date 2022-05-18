const { MessageEmbed } = require("discord.js")
const request = require("request")
const config = require("../../json/config.json")

module.exports.run = async (bot,message,args) => {
    const nick = args[0]

    if(!nick) return message.reply(config.mensagem.colocarNick)

    if(nick.length > 16) {
        const maisDoNumeroCaracteresEmbed = new MessageEmbed()
        .setColor("PURPLE")
        .setDescription("O nick in-game não pode ser mais que 16 caractéres")
        return message.reply({embeds: [maisDoNumeroCaracteresEmbed]})
    }

    let mojang_player_api = `https://api.mojang.com/users/profiles/minecraft/${nick}`
    request(mojang_player_api, function(err, resp, body) {
        if(err) {return message.reply("Essa conta do minecraft não é premium!")}
        try {
            body = JSON.parse(body);
            let idPlayer = body.id;
            let headPlayer = `https://mc-heads.net/minecraft/profile/${idPlayer}`
            let renderização = `https://mc-heads.net/minecraft/profile/${idPlayer}`

                const headSucessSendEmbed = new MessageEmbed()
                .setColor("PURPLE")
                .setDescription(`Cabeça de ${nick}`)
                .setImage(renderização)
                .setFooter("[Clique aqui para baixar a cabeça](" + headPlayer + ")")
                message.reply({embeds: [headSucessSendEmbed]})
        } catch (err) {
            console.log(err)
        }
    })
}

module.exports.help = {
    name: "mchead",
    aliases: ["head"],
}