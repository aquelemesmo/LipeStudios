const {MessageEmbed} = require("discord.js")
const system = require("systeminformation")
const os = require("os")
const moment = require('moment')

module.exports.run = async (bot, message, args) => {
	moment.locale("pt-br")
	var cpu = await system.cpu()
	let bot_criado = moment(bot.user.createdAt).format("LLL")
	let totalSeconds = (bot.uptime / 1000);
	let dias = Math.floor(totalSeconds / 86400);
	totalSeconds %= 86400;
	let horas = Math.floor(totalSeconds / 3600);
	totalSeconds %= 3600;
	let minutos = Math.floor(totalSeconds / 60);
	let segundos = Math.floor(totalSeconds % 60);
	let infopropria = [
		`> <:Discord:952736185413959681>・**Nome**: ${bot.user.username}`,
		`> <:Discord:952736185413959681>・**Discriminator**: ${bot.user.discriminator}`,
		`> **⚙️・Versão**: 2.4.0 <:Beta_Badge:952739148081532989>`,
		"> :1234:・**Meu ID**: 813437884283486280",
		"> <:Crown:952535155044675644>・**Meu criador:** <@401024028388884483>",
		`> <:computer_bsod:952535457940512818>・**Linguagem programada:** Node.JS ${process.version} <:nodejs:952735697436037160>`,
		`> <:biblioteca:952535692385329232>・**Biblioteca trabalhada:** Discord.JS v13.1.0 <:Discord_js_logo:952736957530767390>`,
		`> <:Database:952536049077321758>・**Database trabalhada:** Quick.DB v7.1.3`,
		`> :clock2:・**Tempo on-line:** ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`,
		`> :clock2:・**Fui criado em:** ${bot_criado}`
	]
	
	let infohost = [
		`> <:amd:952738756228698122>・**Processador:** ${cpu.manufacturer} ${cpu.brand} ${cpu.family}°`,
		"> <:oracle:952738320293724240>・**Hospedagem:** Oracle Cloud",
		`> <:Linux:952737814066384936>・**Sistema operacional:** ${os.platform()}`,
	]

		const embed = new MessageEmbed()
		.setThumbnail(bot.user.displayAvatarURL())
		.setColor("PURPLE")
		.addField("Informações minhas", infopropria.join('\n'))
		.addField("Informações da host", infohost.join('\n'))
		message.reply({embeds: [embed]})
}

module.exports.help = {
	name: "botinfo",
	aliases: ["infobot"],
	description: "Mostra informações sobre o bot",
}