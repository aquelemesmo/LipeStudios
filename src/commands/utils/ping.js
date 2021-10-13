const {MessageEmbed} = require("discord.js")

module.exports.run = async (bot, message, args) => {

	const embed = new MessageEmbed()
	.setTitle("Pong!")
	.setColor("PURPLE")
	.setDescription("API: " + bot.ws.ping)
	message.reply({embeds: [embed]})
}

module.exports.help = {
	name: "ping",
	aliases: ["lantencia"]
}