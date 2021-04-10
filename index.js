const Discord = require("discord.js");

const Client = new Discord.Client;

const prefix = "/";

Client.on("ready", () => {
    console.log("Bot opérationnel");
});

Client.on("guildMemberAdd", member => {
    console.log("Un nouveau membre est arrivé");
    member.guild.channels.cache.find(channel => channel.id === "830191473873911908" ).send("Bienvenue à " + member.displayName + " sur Lyanfeld ! \nNous sommes désormais **" + member.guild.memberCount + "** !");
    member.roles.add("830197230601240606").then(mbr => {
        console.log("Rôle attribué avec succès pour " + member.displayName);
    }).catch(() => {
        console.log("Le rôle n'a pas pu être attribué.");
    })
});

Client.on("guildMemberRemove", member => {
    console.log("Un membre nous a quitté");
    member.guild.channels.cache.find(channel => channel.id === "830191515011252244" ).send("Bonne continuation à " + member.displayName );
});

Client.on("message", message => {
    if(message.author.bot) return;

    if(message.content == "Ekip"){
        message.channel.send("667");
    }

    if(message.content == "ekip"){
        message.channel.send("667");
    }

    if(message.content == "667"){
        message.channel.send("Ekip");
    }

    if(message.content == prefix + "source"){
        message.channel.send("Wallah");
    }

    if(message.content == "négro"){
        message.channel.send("att koi");
    }
   
    if(message.content == prefix + "stats"){
        message.channel.send(message.author.username  + " qui a pour identifiant : " + message.author.id + " a posté un message" );
    }

    if(message.member.hasPermission("BAN_MEMBERS")){
        if(message.content.startsWith(prefix + "ban")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre non ou mal mentionné.");
            }
            else {
                if(mention.bannable){
                    mention.ban();
                    message.channel.send(mention.displayName + " a été banni du serveur.");

                }
                else {
                    message.reply("Impossible de bannir ce membre.");
                }
            }
        }
        else if(message.content.startsWith(prefix + "kick")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre non ou mal mentionné.");
            }
            else{
                if(mention.kickable){
                    mention.kick();
                    message.channel.send(mention.displayName + " a été expulsé du serveur.");
                }
                else {
                    message.reply("Impossible d'expulser ce membre.");
                }
            }
        }
        else if(message.content.startsWith(prefix + "mute")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre non ou mal mentionné.");
            }
            else {
                mention.roles.add("830205244587114536");
                mention.roles.remove("830197230601240606");
                message.channel.send(mention.displayName+ " a été réduit au silence.");
            }
        }
        else if(message.content.startsWith(prefix + "unmute")){
            let mention = message.mentions.members.first();
        
            if(mention == undefined){
                message.reply("Membre non ou mal mentionné.");
            }
            else {
                mention.roles.add("830197230601240606");
                mention.roles.remove("830205244587114536");
                message.channel.send(mention.displayName+ " peut à nouveau s'exprimer librement.");
            }
   
        }
        if(message.member.permissions.has("MANAGE_MESSAGES")){
            if(message.content.startsWith(prefix + "clear")){
                let args = message.content.split(" ");

                if(args[1] == undefined){
                    message.reply("Nombre de messages non ou mal défini.");
                }
                else {
                    let number = parseInt(args[1]);
                    if(isNaN(number)){
                        message.reply("Nombre de messages non ou mal défini.");
                    }
                    else {
                        message.channel.bulkDelete(number).then(messages => {
                            console.log("Suppression de " + messages.size + " messages réussie !");
                        }).catch(err =>{
                            console.log("Erreur de clear : " + err);
                        });
                    }
                }
            }
        }
    }

    

});




Client.login("ODI3NjQzNjg5NTQzMDA4Mjk2.YGeBQA.-UYx1YV8ssm2HZAvq-WRQz8LkpU");
