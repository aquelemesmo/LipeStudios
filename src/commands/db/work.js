const db = require("quick.db")
const { MessageEmbed } = require("discord.js")

module.exports.run = async (bot,message,args) => {
    const membro = message.author;
    let coins = await db.fetch(`coins_${message.guild.id}_${membro.id}`)
    let banco = await db.fetch(`banco_${message.guild.id}_${membro.id}`)
    let work = await db.fetch(`work_${message.guild.id}_${membro.id}`)
    if(coins === null) coins = 0;
    if(banco === null) banco = 0;
    let quantia = Math.floor(Math.random() * 15000);
    let tempo = 1500;

    let channel_logs = bot.channels.cache.get("895852308880056360")

    if (work !== null && tempo - (Date.now() - work) > 0) {
        let time = ms(tempo - (Date.now() - work));
  
        const timeEmbed = new MessageEmbed()
        .setColor("ORANGE")
        .setDescription(`Você já trabalhou\n\nColete novamente em \`\`${time.hours}h ${time.minutes}m ${time.seconds}s\`\``);
        message.reply({embeds: [timeEmbed]})
    } else {
        const embed = new MessageEmbed()
        .setColor("ORANGE")
        .setAuthor("Você trabalhou como e ganhou " + quantia + " coins")
        .setThumbnail(bot.user.displayAvatarURL())
        .addFields([
            { name: '> :coin:・Coins', value: ` \`\`${coins}\`\` `, inline: true},
            { name: '> 🏦・Depositado', value: `\`\`${banco}\`\``, inline: true},
        ])
        message.reply({embeds: [embed]})
        db.add(`coins_${message.guild.id}_${membro.id}`, quantia)
        db.set(`work_${message.guild.id}_${membro.id}`, Date.now())

        const logsEmbed = new MessageEmbed()
        .setColor("ORANGE")
        .setAuthor(`${membro.username}#${membro.discriminator}`, membro.displayAvatarURL())
        .setDescription(`${membro} trabalhou e ganhou ${quantia} coins`)
        .setTimestamp()
        channel_logs.send({embeds: [logsEmbed]})
    }
}

module.exports.help = {
    name: "work",
    aliases: ["trabalhar"]
}