const axios = require("axios");

module.exports.run = async (bot,message,args) => {
    const query = args.join(" ")
    if (!query) {
        message.reply("Diga o que você quer mandar.")
    }
    axios(`https://djsdocs.sorta.moe/v2/embed?src=stable&q=${query}`)
    .then(res => {
        message.channel.send({embeds: [res.data]}).catch(() => message.reply("Não achei nenhum resultado para sua pesquisa."))
    })
}

module.exports.help = {
    name: "docs-js",
    aliases: ["djs"],
}