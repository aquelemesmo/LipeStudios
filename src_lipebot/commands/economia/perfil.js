const { MessageEmbed } = require("discord.js");
const { Database } = require("simpl.db")
const db = new Database() 

module.exports.run = async (bot, message, args) => {
    const membro = message.mentions.members.first() || message.member;

    if(!membro) return message.reply("Você precisa mencionar um membro para ver o perfil!")

    const User = db.createCollection("user")

    let moedinhas = User.fetch(m => m.moedinhas === moedinhas)

    //const moedinhas = db.fetch(`moedinhas.${message.guild.id}.${membro.id}`) ?? 0
    //const banco = db.fetch(`banco.${message.guild.id}.${membro.id}`) ?? 0
    //const rep = db.fetch(`rep.${message.guild.id}.${membro.id}`) ?? 0

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