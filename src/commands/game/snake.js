const { Snake } = require("discord-gamecord")

module.exports.run = async (bot,message,args) => {
    new Snake({
        message: message,
        embed: {
            title: "Jogo da cobrinha",
            color: "PURPLE",
            overTitle: 'Game Over',
        },
        snake: { head: '🟢', body: '🟩', tail: '🟢' },
        emojis: {
            board: '⬛',
            food: '🍎',
            up: '⬆️', 
            down: '⬇️',
            right: '➡️',
            left: '⬅️',
        }
    }).startGame();
}

module.exports.help = {
    name: "snake",
    aliases: ["cobra"]
}