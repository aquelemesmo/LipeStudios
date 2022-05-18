const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const config = require("../../src_lipebot/json/config.json")

module.exports.run = async (bot,message,args) => {
    if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply(config.mensagem.semPermissão)
    if(!message.guild.me.permissions.has("ADMINISTRATOR")) return message.reply(config.mensagem.semPermissãoGuild)
        
    const row = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setCustomId("open-ticket")
        .setStyle("SUCCESS")
        .setLabel("Open ticket")
        .setDisabled(false)
    )

    const embed = new MessageEmbed()
    .setTitle("LipeSupport - Ticket")
    .setColor("BLUE")
    .addFields([
        {name: ":flag_br: Versão brasileira", value: "> Aqui você pode abrir um ticket para se quiser tirar alguma dúvida relacionado ao LipeBot, reportar bugs ou mandar alguma sugestão, lembrando que você tem que seguir as regras abaixo."},
        {name: ":flag_us: American version", value: "> Here you can open a ticket if you want to clear up any doubts related to LipeBot, report bugs or send any suggestions, remembering that you have to follow the rules below."},
    ])
    .setThumbnail(message.guild.iconURL())
    .setFooter({text: `© 2021 - 2022 LipeStudios. Todos os direitos reservados ${message.guild.iconURL()}`})
    await message.channel.send({embeds: [embed], components: [row]})
}

module.exports.help = {
    name: "ticket",
    aliases: ["aaa"]
}