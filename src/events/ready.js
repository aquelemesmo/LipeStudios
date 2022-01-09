const moment = require("moment")
require("colors")
module.exports = async (bot, message) => {
    
    moment.locale("pt-br")
    setTimeout(() => {
        let lista = [
            {
                type: "LISTENING",
                message: `Estou em ${bot.guilds.cache.size} servidores`
            },
            {
                type: 'STREAMING',
                message: `Fui criado para ajudar outros servidores`,
                url: "https://twitch.tv/aquelemesmoojack"
            },
            {
                type: "PLAYING",
                message: `Divertindo ${message.users.cache.size} pessoinhas!`
            },
            {
                type: "WATCHING",
                message: `Charles Brown JR e Yung Lixo :)`
            },
            {
                type: "WATCHING",
                message: 'Sabia que eu sei fazer cookie? *-*'
            }
        ]
        const random = lista[Math.floor(Math.random() * lista.length)]
        bot.user.setActivity(random.message, {type: lista.type})
    }, 6000)
 
    console.log(`${moment().format('LLLL')} - Bot ligado! \n\nServidores: ${message.guilds.cache.size}\nMembros: ${message.users.cache.size}\nSlash Commands: ` + `ligado`.green)

    bot.commands.forEach(async props => {
        const data = {name: props.help.name, description: !props.help.description ? "Sem descrição" : props.help.description}
       
        if(props.help.options) {
            data.options = props.help.options
        }

        bot.application.commands.create(data).catch(err => console.log(err))
    })

    let comandos = await bot.application?.commands.fetch()
    comandos.forEach(cmd => {
       if(bot.commands.find(c => c.help.name === cmd.name)) return;
       bot.application.commands.delete(cmd.id)
   })
}