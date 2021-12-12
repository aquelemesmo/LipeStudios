const { MessageEmbed } = require("discord.js");
const db = require("quick.db")

module.exports.run = async (bot,message,args) => {
    const membro = message.mentions.members.first() || message.member;

    let coins = db.fetch(`coins_${message.guild.id}_${membro.id}`)
    if(coins === null) coins = 0;

    let banco = await db.fetch(`banco_${message.guild.id}_${membro.id}`)
    if(banco === null) banco = 0;

    const embed = new MessageEmbed()
    .setColor("ORANGE")
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle("Informações na conta de " + membro.user.username)
    .setDescription("Aqui nessas informações e onde está a sua carteira, onde você pode fazer compras, apostar e etc.")
    .addFields(
        { name: '> :coin:・Coins', value: ` \`\`${coins}\`\` `, inline: true},
        { name: '> 🏦・Depositado', value: `\`\`${banco}\`\``, inline: true},
    )
    message.reply({embeds: [embed]})

}

module.exports.help = {
    name: "saldo",
    aliases: ["atm", "carteira", "money", "coins"]
}