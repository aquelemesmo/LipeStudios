const { MessageEmbed } = require("discord.js");
const { Database } = require("simpl.db");
const db = new Database()
const config = require("../../json/config.json")

module.exports.run = async (bot,message,args) => {
    if(!message.member.permissions.has("MANAGE_SERVER")) return message.reply(config.mensagem.semPermissão)
}

module.exports.help = {
    name: "lang",
    aliases: ["language"]
}