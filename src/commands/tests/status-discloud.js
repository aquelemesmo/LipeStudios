const discloud = require("discloud-status")

module.exports.run = async (bot,message,args) => {
    let r = discloud.ram();
    console.log(r)
 
    let ur = discloud.usoRam();
    console.log(ur)
 
    let tr = discloud.totalRam();
    console.log(tr)
}

module.exports.help = {
    name: "status-discloud",
    aliases: ['discloud-status']
}