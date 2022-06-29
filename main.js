const Discord = require('discord.js')

const TOKEN = 'YOUR TOKEN'

const client = new Discord.Client({
    intents: [
        'GUILDS',
        "GUILD_MESSAGES"
]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on('messageCreate', (message) => {
    if (message.content == 'استيقظ@everyone'){
        message.reply("استيقظ@everyone")
    }
})


client.login(TOKEN)