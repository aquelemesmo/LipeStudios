const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")
const mensagem = require("../../json/mensagem.json")

module.exports.run = async (bot,message,args) => {
    if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply(mensagem.sem_permissao)

    const row = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setCustomId("ticket_button")
        .setEmoji("🎫")
        .setStyle("SUCCESS")
    )

    message.delete();

    const embed = new MessageEmbed()
    .setColor("ORANGE")
    .setThumbnail(message.guild.iconURL())
    .setTitle("Área de atendimento")
    .setDescription("Se caso estive problema no servidor quando se conectar, problemas na compra, pagamentos, dúvidas ou bugs? Você pode abrir um ticket e falar sobre seu problema que iremos te ajudar! \n\nHorário: `\`\ 8:00AM até 21:00 `\`")
    .setFooter("Lembrando que você tem que ler as regras quando você irá abrir um ticket!")

    let msg = message.channel.send({embeds: [embed], components: [row]}).then(() => {
        const filter = m => m.customId === 'ticket_button' && m.user.id;
        const collector = message.createMessageComponentCollector(filter)
        
        collector.on(`collect`, async m => {
            if(m.customId === 'ticket_button') {
                message.guild.channels.create(`ticket-${message.author.discriminator}`, {
                    type: 'TEXT',
                    parent: '895702860786987088',
                    permissionsOverwrites: [
                        {
                            id: message.guild.id,
                            deny: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                        },
                        {
                            id: message.author.id,
                            allow: ['VIEW_CHANNEL', 'SEND_MESAGES']
                        }
                    ]
                }).then(async () => {
                    const embed = new MessageEmbed()
                    .setTitle("Área de atendimento")
                    .setColor("ORANGE")
                    .setDescription("Leia o tópico que são as regras do ticket criado. Se caso você quebrar uma das regras seu ticket é fechado e será banido do grupo.\n\nHorário: ``08:00 - 21:00``")
                    await channel.send({embeds: [embed]})
                })
                await m.deferUpdate()
            }
        })
    })
}

module.exports.help = {
    name: "ticket",
    aliases: ["ticketadd"]
}