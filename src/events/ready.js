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
                message: `Divertindo com ${message.guilds.cache.size} pessoinhas!`
            },
            {
                type: "WATCHING",
                message: 'Sabia que eu sei fazer cookie? *-*'
            }
        ]
    })

    console.log(`Bot ligado! \n\nServidores: ${message.guilds.cache.size}\nMembros: ${message.users.cache.size}`)
}