const {MessageEmbed} = require("discord.js")
const config = require("../../json/config.json")

module.exports.run = async (bot, message, args,ops) => {
	if(args.length === 0) {
		const length = new MessageEmbed()
		.setColor("PURPLE")
		.setTitle("Informações do comando **reportar-bug**")
		.addField("📜・Como usar?", "``lp!reportar-bug <bug>``")
		return message.reply({embeds: [length]})
	}

	if(!args.join(" ").slice(22)) {
		return message.reply("Você não colocou nenhum tipo de bug para ser enviado.")
	}

    message.delete();
	
	message.channel.send(message.author.tag + " seu report foi enviada com sucesso!")

	let channel = bot.channels.cache.get(config.canais.canal_bug)

		const embed = new MessageEmbed()
		.setTitle("Um novo bug foi encontrado")
		.setColor("PURPLE")
		.addField("<:moderacao:780247787891720232>・Qual bug foi reportado", `${args.join(" ").slice(22)}`)
		.setFooter(`Bug reportado por: ${message.author.username}`, message.author.displayAvatarURL())
		await channel.send({embeds: [embed]})
}

module.exports.help = {
	name: "reportar-bug",
	aliases: ["report-bug"]
}