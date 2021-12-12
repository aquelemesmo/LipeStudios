const { MessageEmbed } = require("discord.js")
const db = require("quick.db")
const ms = require("parse-ms")

module.exports.run = async (bot,message,args) => {
    const membro = message.author;

    let coins = await db.fetch(`coins_${message.guild.id}_${membro.id}`)
    let daily = await db.fetch(`daily_${message.guild.id}_${membro.id}`)
    let banco = await db.fetch(`banco_${message.guild.id}_${membro.id}`)
    if(coins === null) coins = 0;
    if(banco === null) banco = 0;

    let quantia = Math.floor(Math.random() * 15000)
    let tempo = 86400000;

    let channel_logs = bot.channels.cache.get("895852308880056360")
        
    if (daily !== null && tempo - (Date.now() - daily) > 0) {
        let time = ms(tempo - (Date.now() - daily));
  
        const timeEmbed = new MessageEmbed()
        .setColor("ORANGE")
        .setDescription(`Você já coletou sua recompensa diária, colete novamente em \`\`${time.hours}h ${time.minutes}m ${time.seconds}s\`\``);
        message.reply({embeds: [timeEmbed]})
    } else {
    const dailyEmbed = new MessageEmbed()
        .setColor("ORANGE")
        .setThumbnail('https://cdn-icons-png.flaticon.com/512/1356/1356510.png')
        .setAuthor("Você coletou a recompensa diária e ganhou " + quantia + " coins")
        .addFields([
            { name: '> :coin:・Coins', value: ` \`\`${coins}\`\` `, inline: true},
            { name: '> 🏦・Depositado', value: `\`\`${banco}\`\``, inline: true},
        ])
        .setTimestamp()
        message.reply({embeds: [dailyEmbed]})
        db.add(`coins_${message.guild.id}_${membro.id}`, quantia)
        db.set(`daily_${message.guild.id}_${membro.id}`, Date.now())

        const logsEmbed = new MessageEmbed()
        .setColor("ORANGE")
        .setAuthor(`${membro.username}#${membro.discriminator}`, membro.displayAvatarURL())
        .setDescription(`${membro} coletou a recompensa diária e ganhou ${quantia} coins`)
        .setTimestamp()
        channel_logs.send({embeds: [logsEmbed]})
    }
}

module.exports.help = {
    name: "daily",
    aliases: ["recompensa-diaria"]
}