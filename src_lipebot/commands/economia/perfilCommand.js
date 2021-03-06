const { MessageEmbed } = require("discord.js");
const db = require("quick.db")

module.exports.run = async (bot, message, args) => {
    const membro = message.mentions.members.first() || message.member;

    if(!membro) return message.reply("Você precisa mencionar um membro para ver o perfil!")

    const moedinhas = db.fetch(`moedinhas_${message.guild.id}_${membro.id}`) ?? 0
    const banco = db.fetch(`banco_${message.guild.id}_${membro.id}`) ?? 0
    const rep = db.fetch(`rep_${message.guild.id}_${membro.id}`) ?? 0

    const embed = new MessageEmbed()
    .setColor("PURPLE")
    .setThumbnail(membro.user.displayAvatarURL())
    .setTitle("Carteira de " + membro.user.username)
    .setDescription("Lembrando que você pode ganhar alguns bônus usando **roleta-russa, apostar e bingo** para poder ganhar mais moedinhas!")
    .addFields(
        {name: '> :coin:・Moedinhas', value: `${moedinhas}`, inline: true},
        {name: '> :bank:・Depositado', value: `${banco}`, inline: true},
        {name: '> :trophy:・Reputação', value: `${rep}`, inline: true}
    )
    message.reply({embeds: [embed]})
}

module.exports.help = {
    name: "perfil",
    aliases: ["atm", "carteira", "saldo"],
}