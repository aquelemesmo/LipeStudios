const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports.run = async (bot, message, args) => {
    if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply("Você não tem permissão para isso!")
    if(!message.guild.me.permissions.has("BAN_MEMBERS")) return message.reply("Você não tem permissão para isso!")

    const membro = message.mentions.members.first() || message.options?.getUser("membro")
    const motivo = args.join(" ").slice(22)

    let canalSet = db.get(`punichannel_${message.guild.id}`)
    let tempo = 10000;

    if(canalSet === null) {
        return;
    }

    if(!membro) return message.reply("Você esqueceu de mencionar um membro!")
    if(!motivo) return message.reply("Coloque um motivo válido")

    
    message.reply("Você está prestes a punir o " + membro.user.username + " para confirmar o punimento, reage o emoji ✅ abaixo para ele ser punido automaticamente, lembrando que você pode usar o comando ``lp!softban`` para banir diretamente sem esse aviso.\n\nE se caso você deseja não punir esse usuário, reage o emoji ❌ para poder negar o punimento\n\nVocê tem apenas **10 segundos** para reagir.").then(msg=> {
        msg.react("✅")
        msg.react("❌")
        
        const filtro1 = (reaction, user) => reaction.emoji.name === "✅" && user.id === message.author.id
        const filtro2 = (reaction, user) => reaction.emoji.name === "❌" && user.id === message.author.id
        const collector1 = message.channel.createReactionCollector(filtro1, { time: tempo })
        const collector2 = message.channel.createReactionCollector(filtro2, { time: tempo })

        collector1.on("collect", async () => {
            membro.ban({reason: motivo})
            bot.channels.cache.get(canalSet).send({embeds: [embed]})
        })

        collector2.on("collect", async () => {
            msg.delete();
            message.channel.send("O punimento foi cancelado!").then(x => x.delete({timeout: 5000}))
        })
    })

    const embed = new MessageEmbed()
    .setTitle("Um usuário foi punido do servidor!")
    .setThumbnail(membro.user.displayAvatarURL())
    .setColor("PURPLE")
    .addFields(
        {name: 'Nome do usuário', value: `${membro.user.username}`},
        {name: 'Motivo', value: `${motivo}`},
        {name: 'Author do punimento', value: `${message.author.tag}`},
        {name: 'Ação do punimento', value: 'Banimento eterno'}
    )
}

module.exports.help = {
    name: "ban",
    aliases: ["banir"]
}