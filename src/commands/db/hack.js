const db = require('quick.db')
const ms = require("parse-ms")

module.exports.run = async (bot,message,args) => {
    const membro = message.author;
    let quantia = Math.floor(Math.random() * 500)
    let moedinhas = await db.fetch(`moedinhas_${membro.id}`)
    let timeout = 50000000;
    let hacks = ['Nasa', 'Banco itaú', 'Banco do Brasil', 'Oracle cloud', 'Computadores pontentes', 'Servidores da FBI', 'Bolsonaro']

    const response = hacks[Math.floor(Math.random() * hack.length)];

    if (moedinhas !== null && timeout - (Date.now() - moedinhas) > 0) {
        let m = ms(timeout - (Date.now() - moedinhas));
    
        const tempo = new MessageEmbed()
        .setColor("PURPLE")
        .setDescription(`Você já hackeou, aguarde agora em ${m.minutes}m. ${m.seconds}s.`);
        message.reply({embeds: [tempo]})
    } else {
        const embed = new MessageEmbed()
        .setColor("PURPLE")
        .setDescription("Você hackeou **" + response + "** e ganhou " + quantia + " de moedinhas")
        message.reply({embeds: [embed]})
        db.add(`moedinhas_${membro.id}`, quantia)
        db.set(`trabalho_${membro.id}`, Date.now())
    }
}

module.exports.help = {
    name: "hack",
    aliases: ["hackear"]
}