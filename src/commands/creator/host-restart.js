const fetch = require("node-fetch")

module.exports.run = async (bot, message, args) => {
    let perms = [
        "401024028388884483", //eu
	]

	if(!perms.includes(message.author.id)) return message.reply("Esse comando e só usado pelo meu criador!")

    fetch(`https://discloud.app/status/bot/867169426733400104/restart`, {
        method: "post",
        headers: {
            "api-token": "zubu8UzROrbJEeLXcMeFNH57onEOklZtD91dHaJn6g5qiQQfsdl0PK84B6QIeonVe"
        }
    })
}

module.exports.help = {
    name: "host-restart",
    aliases: ["restart-host"],
}