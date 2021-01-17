const Discord = require('discord.js');
const client = new Discord.Client();
client.login("Nzg4ODQ2MjYwNjA5NjEzODY0.X9pcVA.XMs1kG8eUqxToyyUesZmyG1wF1w");

client.on("message", (message) => {
    if (message.content.startsWith("!kick")) {
        var utenteKick = message.mentions.members.first();

        if (!message.member.hasPermission("KICK_MEMBERS")) {
            message.channel.send('Non hai il permesso');
            return;
        }

        if (!utenteKick) {
            message.channel.send('Non hai menzionato nessun utente');
            return;
        }

        if (!message.mentions.members.first().kickable) {
            message.channel.send('Io non ho il permesso');
            return
        }

        utenteKick.kick()
            .then(() => message.channel.send("<@" + utenteKick + ">" + " kiccato"))

    }

    if (message.content.startsWith("k!ban")) {
        var utenteBan = message.mentions.members.first();

        if (!message.member.hasPermission("BAN_MEMBERS")) {
            message.channel.send('Non hai il permesso');
            return;
        }

        if (!utenteBan) {
            message.channel.send('Non hai menzionato nessun utente');
            return;
        }

        if (!utenteBan.kickable) {
            message.channel.send('Io non ho il permesso');
            return
        }

        utenteBan.ban()
            .then(() => message.channel.send("<@" + utenteBan + ">" + " è statobannato"))

    }
})

client.on("message", (message) => {
    if (message.content == "!comando") {
        message.channel.send("Segli una reazione")
            .then(messaggio => {
                messaggio.react("👍");
                messaggio.react("👎");

                var filtro = (reaction, user) => ["👍", "👎"].includes(reaction.emoji.name) && user.id == message.author.id;

                messaggio.awaitReactions(filtro, { max: 1, time: 10000 })
                    .then(collected => {
                        var reazione = collected.first().emoji.name;
                        if (reazione == "👍") {
                            message.channel.send("OK, bravo");
                        }
                        if (reazione == "👎") {
                            message.channel.send("NO, arrivederci");
                        }

                    }).catch(collected => {
                        return message.channel.send("Tempo scaduto!");
                    })




            })
    }
})
client.on("message", (message) => {
    if (message.content == "!come state") {
        message.channel.send("come state")
            .then(function (message) {
                message.react("😍");
                message.react("😭");
            })
    }
})
