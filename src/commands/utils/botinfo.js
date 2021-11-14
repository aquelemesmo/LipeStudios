const {MessageEmbed} = require("discord.js")
const system = require("systeminformation")
const os = require("os")
const moment = require('moment')
moment.locale("pt-br")

module.exports.run = async (bot, message, args) => {
	var usoMemória = os.totalmem() -os.freemem(), totalMemória = os.totalmem();
	var cpu = await system.cpu()
	var terPorcetagem = ((usoMemória/totalMemória) * 100).toFixed(2) + '%'

	let totalSeconds = (bot.uptime / 1000);
	let dias = Math.floor(totalSeconds / 86400);
	totalSeconds %= 86400;
	let horas = Math.floor(totalSeconds / 3600);
	totalSeconds %= 3600;
	let minutos = Math.floor(totalSeconds / 60);
	let segundos = Math.floor(totalSeconds % 60);
	let infopropria = [
		`> <:discord:813438382428389457>・**Nome**: ${bot.user.username}`,
		`> <:discord:813438382428389457>・**Discriminator**: ${bot.user.discriminator}`,
		"> <:ids:813438883601317889>・**Meu ID**: 813437884283486280",
		"> <:owner:780262066056462336>・**Meu criador:** <@401024028388884483>",
		"> <:computador:780732699203338240>・**Linguagem programada:** Node.JS <:nodejs:813433244019982357>",
		"> <:emoji2:781657909661532201>・**Biblioteca trabalhada:** Discord.JS <:discordjs:813433596307046410>",
		`> :clock2:・**Tempo on-line:** ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`,
	]
	
	let infohost = [
		`> <:cpu:813778764491522062>・**Processador:** ${cpu.manufacturer} ${cpu.brand} ${cpu.family}°`,
		"> <:cpu:813778764491522062>・**Hospedagem:** PC",
		`> <:cpu:813778764491522062>・**Plataforma:** ${os.platform()}`,
		`> <:cpu:813778764491522062>・**Uso de memória:** ${terPorcetagem}`,
	]
	

	const embed = new MessageEmbed()
	.setThumbnail(bot.user.displayAvatarURL())
	.setColor("PURPLE")
	.addField("Informações própria", infopropria.join('\n'))
	.addField("Informações da host", infohost.join('\n'))
	message.reply({embeds: [embed]})
}

module.exports.help = {
	name: "botinfo",
	aliases: ["infobot"]
}