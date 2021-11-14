const mongoose = require("mongoose")
const Schema = mongoose.Schema

mongoose.connect(`mongodb+srv://RedeBlazer:JKComunidade123@cluster0.izmnb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, (err) => {
    if(err) return console.log(`Erro a se conectar pela MongoDB\n${err}`)
    console.log(`Database MongoDB conectada`)
})

var grupo = new Schema({
    _id: {
        type: String
    },

    entrada: {
        type: String
    }
})

var usuario = new Schema({
    _id: {
        type: String
    },
    level: {
        type: Number,
        default: 1,
    },
    xp: {
        type: Number,
        default: 0
    }
})

var eco = new Schema({
    _id: {
        type: String,
    },
    moedinhas: {
        type: Number,
        default: 0,
    },
    banco: {
        type: Number,
        default: 0,
    },
    daily: {
        type: Number,
        default: 0,
    },
    work: {
        type: Number,
        default: Date.now()
    }
})

var Users = mongoose.model('Users', usuario)
var Guild = mongoose.model('Guild', grupo)
var Eco = mongoose.model('Economia', eco)
exports.Users = Users
exports.Guild = Guild
exports.Eco = Eco