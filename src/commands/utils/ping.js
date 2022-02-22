const {MessageEmbed} = require("discord.js")


module.exports.run = async (bot, message, args) => {
	const embed = new MessageEmbed()
	.setTitle("Pong!")
	.setColor("PURPLE")
	.addFields([
		{name: `> <:container:937806953596469339>・API:`, value: `${bot.ws.ping}`, inline: true},
		{name: `> <:Gears:937807928856018984>・LipePing:`, value: `${Date.now() - message.createdTimestamp}`, inline: true},
	])
	message.reply({embeds: [embed]})
}

module.exports.help = {	
	name: "ping",
	aliases: ["lantencia"],
	description: "Mostra a latência do bot"
}