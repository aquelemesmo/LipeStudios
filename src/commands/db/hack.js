const db = require("quick.db")
const ms = require("parse-ms");
const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const membro = message.author;

    let hacks = ["Nasa", "Oracle", "Computadores potentes", "Microsoft Studios"]
    let coins = await db.fetch(`coins_${message.guild.id}_${membro.id}`)
    let banco = await db.fetch(`banco_${message.guild.id}_${membro.id}`)
    if(coins === null) coins = 0
    if(banco === null) banco = 0;
    let hack = await db.fetch(`hack_${membro.id}`)
    let quantia = Math.floor(Math.random() * 500)
    let tempo = 1000 * 5

    let response = hacks[Math.floor(Math.random() * hacks.length)];

    let channel_logs = bot.channels.cache.get("895852308880056360")

    if(hack !== null && tempo - (Date.now() - hack) > 0) {
        let time = ms(tempo - (Date.now() - hack));

        const timeEmbed = new MessageEmbed()
        .setColor("ORANGE")
        .setDescription(`Você já hackeou e agora aguarde novamente em \`\`${time.minutes}m ${time.seconds}s\`\``);
        message.reply({embeds: [timeEmbed]})
    } else {
        const successEmbed = new MessageEmbed()
        .setColor("ORANGE")
        .setThumbnail('https://cdn-icons-png.flaticon.com/512/3014/3014285.png')
        .setAuthor("Você hackeou a " + response + " e ganhou " + quantia + " coins")
        .addFields([
            { name: '> :coin:・Coins', value: ` \`\`${coins}\`\` `, inline: true},
            { name: '> 🏦・Depositado', value: `\`\`${banco}\`\``, inline: true},
        ])
        .setTimestamp()
        message.reply({embeds: [successEmbed]})
        db.add(`coins_${message.guild.id}_${membro.id}`, quantia)
        db.set(`hack_${message.guild.id}_${membro.id}`, Date.now())

        const logsEmbed = new MessageEmbed()
        .setColor("ORANGE")
        .setAuthor(`${membro.username}#${membro.discriminator}`, membro.displayAvatarURL())
        .setDescription(`${membro} hackeou ${response} e ganhou ${quantia} coins`)
        .setTimestamp()
        channel_logs.send({embeds: [logsEmbed]})
    }
}

module.exports.help = {
    name: "hack",
    aliases: ['hackear']
}