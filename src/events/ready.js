module.exports = async (bot, message) => {
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
                message: `Divertindo ${message.users.cache.size} pessoinhas!`,
                status: "dnd"
            },
            {
                type: "WATCHING",
                message: 'Sabia que eu sei fazer cookie? *-*'
            }
        ]
        const random = lista[Math.floor(Math.random() * lista.length)]
        bot.user.setActivity(random.message, {type: lista.type, status: lista.status})
    }, 5000)
    
    console.log(`Bot ligado! \n\nServidores: ${message.guilds.cache.size}\nMembros: ${message.users.cache.size}`)
}