const {MessageEmbed} = require("discord.js")

module.exports.run = async (bot, message, args) => {

	const embed = new MessageEmbed()
	.setTitle("Pong!")
	.setColor("PURPLE")
	.addFields([
		{name: `> <:container:914141553574936616>・API:`, value: `${bot.ws.ping}`, inline: true},
		{name: `> <:configurando:780780622213021699>・LipePing:`, value: `${Date.now() - message.createdTimestamp}`, inline: true},
	])
	message.reply({embeds: [embed]})
}

module.exports.help = {	
	name: "ping",
	aliases: ["lantencia"]
}