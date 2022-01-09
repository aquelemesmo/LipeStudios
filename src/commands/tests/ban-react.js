const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports.run = async (bot, message, args) => {
    if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply("Você não tem permissão para isso!")
    if(!message.guild.me.permissions.has("BAN_MEMBERS")) return message.reply("Você não tem permissão para isso!")

        const membro = message.mentions.members.first() || message.options.getUser('user')
 || messsage.options?.getUser("user")
    const motivo = args.join(" ").slice(22)

    let canalSet = db.get(`punichannel_${message.guild.id}`)

    if(canalSet === null) {
        return;
    }

    if(!membro) return message.reply("Você esqueceu de mencionar um membro!")
    if(!motivo) return message.reply("Coloque um motivo válido")
    
    message.reply("Você está prestes a punir o <@" + membro.id + "> para confirmar o punimento, reage o emoji \✅ abaixo para ele ser punido automaticamente, lembrando que você pode usar o comando ``lp!softban`` para banir diretamente sem esse aviso.\n\nE se caso você deseja não punir esse usuário, reage o emoji \❌ para poder negar o punimento\n\n> Você tem apenas **15 segundos** para reagir.").then(msg=> {
        msg.react("✅").then(() => {
            msg.react("❌")
        })
        
        const punishmentAccept = msg.createReactionCollector((reaction, user) => reaction.emoji.name === "✅" && user.id === message.author.id)
        const punishmentNegative = msg.createReactionCollector((reaction, user) => reaction.emoji.name === "❌" && user.id === message.author.id)

        punishmentAccept.on("collect", async () => {
            membro.ban({reason: motivo})
            bot.channels.cache.get(canalSet).send({embeds: [embed]})
        })

        punishmentNegative.on("collect", async () => {
            msg.delete()
            console.log("Cancelado")
        })

        setTimeout(() => {
            msg.edit("> O tempo de punição foi terminado!")
            msg.reactions.removeAll().catch(err => {
                console.log(err)
            })
        }, 15000);
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
    name: "ban-react",
    aliases: ["br"]
}