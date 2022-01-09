const {MessageEmbed} = require("discord.js")
const system = require("systeminformation")
const os = require("os")
const moment = require('moment')
const discloud = require("discloud-status")


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
		`> <:discord:813438382428389457>・**Nome**: ${bot.user.username}`,
		`> <:discord:813438382428389457>・**Discriminator**: ${bot.user.discriminator}`,
		"> <:ids:813438883601317889>・**Meu ID**: 813437884283486280",
		"> <:owner:780262066056462336>・**Meu criador:** <@401024028388884483>",
		`> <:computador:780732699203338240>・**Linguagem programada:** Node.JS ${process.version} <:nodejs:813433244019982357>`,
		`> <:emoji2:781657909661532201>・**Biblioteca trabalhada:** Discord.JS v13.1.0 <:discordjs:813433596307046410>`,
		`> <:database:921604851903889459>・**Database trabalhada:** Quick.DB v7.1.3`,
		`> :clock2:・**Tempo on-line:** ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`,
		`> :clock2:・**Fui criado em:** ${bot_criado}`
	]
	
	let infohost = [
		`> <:cpu:813778764491522062>・**Processador:** ${cpu.manufacturer} ${cpu.brand} ${cpu.family}°`,
		"> <:discloud:919581151948075069>・**Hospedagem:** Discloud",
		`> <:cpu:813778764491522062>・**Sistema operacional:** ${os.platform()}`,
		`> <:memoria:919580194015170560>・**Uso de memória:** ${discloud.usoRam()}`,
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