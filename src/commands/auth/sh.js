const sh = require("shelljs")

module.exports.run = async (bot,message,args) => {
    let perms = "401024028388884483"

    if(!args[0]) return message.reply("Insira o codigo que deseja executar.")

	if(!perms.includes(message.author.id)) return message.reply("Esse comando e só usado pelo meu criador!")

    if(sh.exec(args.join(" ")).stdout.length === 0) return message.reply(`\`\`\`${sh.exec(args.join(" ")).stderr}\`\`\``)
}

module.exports.help = {
    name: "sh",
    aliases: ["shell"],
    description: "Executa um comando shell",
}