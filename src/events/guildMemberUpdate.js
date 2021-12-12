const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
const cor = require("../json/cor.json")

module.exports = async (bot,member, oldMember, newMember) => {
    let canalSet = db.get(`boostchannel_${member.guild.id}`)

    if(canalSet === null) {
        return;
    }

    let oldStatus = oldMember.premiumSince;
    let newStatus = newMember.premiumSince;

    const boostInServerEmbed = new MessageEmbed()
    .setColor(cor.roxo)
    .setDescription("O usuário " + newMember.user.tag + " deu boost no grupo!")
    .setTimestamp()

    const removeboostInServerEmbed = new MessageEmbed()
    .setColor(cor.roxo)
    .setDescription("O usuário " + newMember.user.tag + " removeu o boost no grupo!")
    .setTimestamp()
    
    if(!oldStatus && newStatus) {
        bot.channels.cache.get(canalSet).send({embeds: [boostInServerEmbed]})
    }

    if(!newStatus && oldStatus) {
        bot.channels.cache.get(canalSet).send({embeds: [removeboostInServerEmbed]})
    }
}