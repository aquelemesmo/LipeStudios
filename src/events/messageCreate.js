const { MessageEmbed } = require("discord.js")
const config = require("../json/config.json")

module.exports = async (bot, message) => {
    if(message.content === `<@!${bot.user.id}>` || message.content === `<@${bot.user.id}>`) {
        const embed = new MessageEmbed()
        .setColor("PURPLE")
        .setTitle("Olá, eu sou o " + bot.user.username)
        .setThumbnail(bot.user.displayAvatarURL())
        .addField("> Quem eu sou?", "Eu me chamo Lipe, um simples bot para entreter outros membros do Discord!")
        .addField("> Quais são suas funcionalidades?", "Eu faço os membros se divertirem, eu configuro seu grupo e ainda por cima eu posso punir quem quebra as regras!")
        .addField("> Como vejo suas funções?", "Digite ``lp!help`` para poder ver meus comandos!")
        .addField("> E caso queira me votar no top.gg, digite ``lp!vote``", "©・Todos os direitos reservados de LipeStudios 2022")
        message.reply({embeds: [embed]})
    }

    if(message.author.bot || message.type.channel === "dm") return;

    let args = message.content.slice(config.prefix.length).trim().split(/ +/g)
    let command = args.shift().toLowerCase();

    const arquivoCommand = bot.commands.get(command) || bot.commands.get(bot.aliases.get(command))

    if(arquivoCommand) {
        const executeCommandEmbed = new MessageEmbed()
        .setColor("PURPLE")
        .setTitle("Comando executado")
        .setDescription("> Nickname: " + message.author.username + "\n> ID: " + message.author.id + "\n> Comando executado no grupo: " + message.guild.name + "\n> ID do grupo: " + message.guild.id + "\n> Comando executado no canal: " + message.channel.name + "\n> Comando executado: " + "lp!" + arquivoCommand.help.name + ` ${args.join(" ")}`)
        bot.channels.cache.get("935145629573873674").send({embeds: [executeCommandEmbed]})
    }

    try {
        arquivoCommand.run(bot, message, args)
    } catch (e) {
        const embed = new MessageEmbed()
        .setColor("RED")
        .addFields([
            {name: "> Erro", value: "```js\n" + e.stack + "```"},
            {name: "> Comando executado em", value: `${message.guild.name}`},
            {name: "> Canal excutado em", value: `${message.channel.name}`, inline: true},
            {name: "> Usuário que executou o comando", value: `<@${message.author.id}>`, inline: true},
        ])
        bot.channels.cache.get("935145629573873674").send({embeds: [embed]})
    }
}