const { MessageEmbed } = require("discord.js")
const { inspect } = require('util')

module.exports.run = (bot, message, args) => {
	let perms = [
        "401024028388884483", //eu
	]

	if(!perms.includes(message.author.id)) return message.reply("Esse comando e só usado pelo meu criador!")

    if(args[0] == "message.reply(bot.login)") return message.reply("Esse input está bloqueado.")
    if(args[0] == "message.reply(bot.token)") return message.reply("Esse input está bloqueado.")
    if(args[0] == "message.channel.send(bot.token)" ) return message.reply("Esse input está bloqueado.")
    if(args[0] == "message.channel.send(bot.login)") return message.reply("Esse input está bloqueado.")
    if(args[0] == "bot.token") return message.reply("Está função foi bloqueada.")
    if(args[0] == "process.exit") return message.reply("Vai tentar me desligar?")
    if(args[0] == "process.exit()") return message.reply("Vai tentar me desligar?")
    
    const input = args.slice(0).join(" ");
    if(!input) {return message.reply("Insira o codigo que deseja executar.")}
    
    try {
        var output = eval(input);
        if(typeof output !== "string") output = inspect(output);
        if(output.length > 1950) output = output.substr(0, 1950);

        const evalEmbed = new MessageEmbed()
        .setColor("PURPLE")
        .addField("Input", `\`\`\`js\n${input}\`\`\``)
        .addField("Output", `\`\`\`js\n${output}\`\`\``)
        message.reply({embeds: [evalEmbed]})
    } catch(err) {
        message.reply(`**Erro:**\n\`\`\`${err}\`\`\``)
    }

}

module.exports.help = {
	name: "eval",
    aliases: ["process"],
}