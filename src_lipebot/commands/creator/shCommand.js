const shell = require("shelljs")
const config = require("../../json/config.json")

module.exports.run = async (bot,message,args) => {
    if (message.author.id !== '401024028388884483') return message.channel.send(config.mensagem.semPermissão)
    if(!args[0]) return message.channel.send('Digite o que quer executar no console!')
    if(shell.exec(args.join(" ")).stdout.length === 0) {
        return message.channel.send(` \`\`\`${shell.exec(args.join(" ")).stderr}\`\`\` `) 
    }
    message.reply(` \`\`\`${shell.exec(args.join(" ")).stdout}\`\`\` `)
}

module.exports.help = {
    name: "sh",
    aliases: ["shell"]
}