const db = require("quick.db")

module.exports = async (bot,member, message) => {
    let canalSet = db.get(`leavechannel_${member.guild.id}`)

    if(canalSet === null) {
        return;
    }

    bot.channels.cache.get(canalSet).send(member.user.username + " saiu do servidor, espero que um dia ele volte.")
}