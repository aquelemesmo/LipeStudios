const { MessageEmbed } = require("discord.js")

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

        function randInt(min, max) { 
            return Math.floor(Math.random() * (max - min) + min);
        }
        
        console.log(randInt(1, 10));

        const embed = new MessageEmbed()
        .setColor("PURPLE")
        .setTitle("Minerio encontrado!")
        .setDescription("")
        
    }
}

module.exports.help = {
    name: "minerar"
}