const db = require("quick.db")
const { MessageEmbed } = require("discord.js")

module.exports.run = async (bot, message, args) => {
    const membro = message.author;

    let coins = await db.fetch(`coins_${message.guild.id}_${membro.id}`)
    let banco = await db.fetch(`banco_${message.guild.id}_${membro.id}`)
    if(coins === null) coins = 0;
    if(banco === null) banco = 0;

    if (coins < 100) return message.reply("Você não tem coins suficientes para usar este comando!")

    const embed = new MessageEmbed()
    .setColor("ORANGE")
    .setThumbnail("https://cdn-icons.flaticon.com/png/512/855/premium/855269.png?token=exp=1637972519~hmac=3da5aacaa74ac33ca103d3dac4aa3820")
    .setAuthor("Você depositou todo seus coins ao banco!")
    .setTimestamp()    
    message.reply({embeds: [embed]})
    db.subtract(`coins_${message.guild.id}_${membro.id}`, coins)
    db.add(`banco_${message.guild.id}_${membro.id}`, coins)
}

module.exports.help = {
    name: "depall",
    aliases: ["dep-all"]
}