const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")

module.exports = async (bot, interaction) => {
    if(interaction.isButton()) {
        if(interaction.customId === "open-ticket") {
            interaction.deferUpdate()
            const canal = await interaction.message.guild.channels.create(`ticket-${interaction.user.discriminator}`, {
                type: "text",
                parent: "939720892236304394",
                permissionOverwrites: [
                    {
                        id: interaction.message.guild.id,
                        deny: ["VIEW_CHANNEL"]
                    },
                    {
                        id: interaction.message.author.id,
                        allow: ["VIEW_CHANNEL"]
                    },
                    {
                        id: bot.user.id,
                        allow: ["VIEW_CHANNEL"]
                    }
                ]
            })

            const row = new MessageActionRow()
            .addComponents(new MessageButton().setCustomId("close-ticket").setEmoji("❌").setStyle("DANGER"))
            
            const ticketEmbed = new MessageEmbed()
            .setColor("PURPLE")
            .setDescription("Olá, eu sou o LipeSupport, o bot que cuida de todas as dúvidas relacionadas ao LipeBot.\n\nPara encerrar o ticket, basta clicar no botão abaixo.")
            canal.send({embeds: [ticketEmbed], components: [row]})
        } else if(interaction.customId === "close-ticket") {
            interacion.message.channel.send("O ticket será fechado em 5 segundos.")
            setTimeout(() => {
                interacion.message.channel.delete()
            }, 5000);
        }
    }
}