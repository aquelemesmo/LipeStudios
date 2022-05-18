const moment = require("moment")
require("colors")
module.exports = async (bot, message) => {
    moment.locale("pt-br")
    setTimeout(() => {
        let lista = [
            {
                type: 'LISTENING',
                message: `Estou em ${bot.guilds.cache.size} servidores`
            },
            {
                type: 'STREAMING',
                message: `Fui criado para ajudar outros servidores`,
                url: "https://twitch.tv/aquelemesmoojack"
            },
            {
                type: 'PLAYING',
                message: `Divertindo ${message.users.cache.size} pessoinhas!`
            },
            {
                type: 'WATCHING',
                message: `Charles Brown JR e Yung Lixo :)`
            },
            {
                type: 'WATCHING',
                message: 'Sabia que eu sei fazer cookie? *-*'
            }
        ]
        const random = lista[Math.floor(Math.random() * lista.length)]
        bot.user.setActivity(random.message, {type: lista.type})
    }, 6000)
 
    console.log(`${moment().format('LLLL')} - Bot ligado! \n\nServidores: ${message.guilds.cache.size}\nMembros: ${message.users.cache.size}`)

    bot.commands.forEach(props => {
        const data_command = {
            name: props.help.name,
            description: !props.help.description ? "Sem descrição" : props.help.description,
        }

        if(props.help.options) {
            data_command.options = props.help.options
        }

        bot.application?.commands.create(data_command).catch(err => console.log("[SLASH COMMANDS] Um erro foi detectado a criação do Slash Commands! Erro: " + err.message)) 
    })

    console.log("[SLASH COMMANDS] Slash Commands foi carregado e iniciado normalmente!")

    let comandos = await bot.application.commands.fetch()
    comandos.forEach(cmd => {
        if(bot.commands.find(c => c.help.name === cmd.name)) return;
        bot.application.commands.delete(cmd.id).catch(e => console.log(e))
    })
}