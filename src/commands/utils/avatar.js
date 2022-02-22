const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot,message,args) => {
    const membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    if(!membro) return message.reply("Você esqueceu de mencionar um membro!")

    const embed = new MessageEmbed()
    .setColor("PURPLE")
    .setTitle("Avatar do " + membro.user.username)
    .setImage(membro.user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    message.reply({embeds: [embed]})
}

module.exports.help =  {
    name: "avatar",
    aliases: ["av"],
}