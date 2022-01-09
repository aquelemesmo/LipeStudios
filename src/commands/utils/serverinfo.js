const { MessageEmbed } = require("discord.js")
const moment = require("moment")

module.exports.run = async (bot,message,args) => {

    let serverinfo = [
        `> <:computador:780732699203338240>・Nome do servidor: ${message.guild.name}`,
        `> :1234:・ID do servidor: ${message.guild.id}`,
        `> <:owner:780262066056462336>・Dono do servidor: <@${message.guild.ownerId}>`,
        `> <:localizacao:780730170608058378>・Região do servidor: ${message.guild.region}`,
        `> <:moderacao:780247787891720232>・Servidor foi criado em: ${moment(message.guild.createdAt).format('LLL')}`,
        `> <:moderacao:780247787891720232>・Entrei no servidor em: ${moment(message.guild.joinedAt).format('LLL')}`,
        `> <:discord:813438382428389457>・Total de membros no servidor: ${message.guild.memberCount}`,
        `> <a:nitro:929736569584250921>・Nível de boost: ${message.guild.premiumTier.replace("NONE", "Sem boost").replace("TIER_1", "Nível 1").replace("TIER_2", "Nível 2").replace("TIER_3", "Nível 3")}`,
        `> <a:nitro:929736569584250921>・Boost no servidor: ${message.guild.premiumSubscriptionCount}`,
        `> <:online:927789979395031052>・Pessoas online no servidor: ${message.guild.members.cache.filter(s => s.presence.status === "online").size}`,
        `> <:offline:927789979353112646>・Pessoas offline no servidor: ${message.guild.members.cache.filter(s => s.presence.status === "offline").size}`,
        `> <:ausente:927789979151765605>・Pessoas ausente no servidor: ${message.guild.members.cache.filter(s => s.presence.status === "idle").size}`,
        `> <:ocupado:927789979424423947>・Pessoas ocupados no servidor: ${message.guild.members.cache.filter(s => s.presence.status === "dnd").size}`,
        `> <:aovivo:927789979474755584>・Pessoas ao vivo no servidor: ${message.guild.members.cache.filter(s => s.presence.status === "streaming").size}`,
        `> <:som:785710895128117248>・Total de canais de textos no servidor: ${message.guild.channels.cache.filter(c => c.type === "GUILD_TEXT").size}`,
        `> <:som:785710895128117248>・Total de canais de voz no servidor: ${message.guild.channels.cache.filter(c => c.type === "GUILD_VOICE").size}`
    ]
    
    const embed = new MessageEmbed()
    .setColor("PURPLE")
    .setTitle("Informações do servidor")
    .setThumbnail(message.guild.iconURL())
    .setDescription(serverinfo.join("\n"))
    message.reply({embeds: [embed]})
}

module.exports.help = {
    name: "serverinfo",
    aliases: ["infoserver"]
}