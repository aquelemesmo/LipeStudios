const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports.run = async (bot,message,args) => {
    if(args.length === 0) {
        const lengthEmbed = new MessageEmbed()
        .setColor("PURPLE")
        .setTitle("Como usar o comando ```minerar?```")
        .setDescription("O comando se basea quando você irá minerar em algumas cavernas, ruínas ou encontrar algumas coisas raras nas minas abandonadas")
        .addFields([
            {name: "> Como usa o comando?", value: "lp!minerar <caverna/ruinas/minas>"}
        ])
        return message.reply({embeds: [lengthEmbed]})
    }

    if(args[0] === "caverna") {
        let carvao = Math.floor(Math.random() * 18) + 5
        let ferro = Math.floor(Math.random() * 5) + 3
        let diamante = Math.floor(Math.random() * 2)

        const carvaoFetch = db.fetch(`carvao_${message.guild.id}_${message.author.id}`);

        if(carvao === Math.floor(Math.random() * 18) + 5) {
            db.add(`carvao_${message.guild.id}_${message.author.id}`, 1)
            console.log("1")
        } else {
            message.reply("O carvão não foi encontrado")
        }

        const embed = new MessageEmbed()
        .setColor("PURPLE")
        .setTitle("Minerio encontrado!")
        .setDescription("")
        
    }
}

module.exports.help = {
    name: "minerar"
}