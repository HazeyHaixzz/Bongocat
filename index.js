const {Client, RichEmbed} = require('discord.js');
const bot = new Client();

const PREFIX = 'e!';

bot.on('ready', () =>{

    console.log('ElectroDynamix is now online.');

})


bot.on('message', msg =>{
    if(msg.content === "hi"){
        msg.channel.sendMessage('neko :3');
    }
})

bot.on('message', msg =>{
    if(msg.content === "no u"){
        msg.channel.sendMessage('neko neko.. :(');
    }
})

bot.on('message', msg =>{
    if(msg.content === "neko"){
        msg.channel.sendMessage('neko neko :3');
    }
})

bot.on('message', message =>{

    let args = message.content.substring(PREFIX.length).split(" ");


    switch(args[0]){


        case "invite":
            const Embed = new RichEmbed()
                .setColor(0xffC300)
                .setTitle("Invitation Link")
                .setDescription("https://discordapp.com/oauth2/authorize?client_id=636831105244200962&scope=bot&permissions=66584040");
            
            
                if(!args[1]){
                    message.channel.send(Embed);
                    break;
                }
    }
})
            
            
bot.on('message', message =>{
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){


        case "say":
            const Embed = new RichEmbed()
                .setColor(0xffC300)
                .setTitle("Anouncements")
                .setDescription("e!say to make an announcement");


                if(!args[1]){
                    message.channel.send(Embed);
                    break;
                }


                let msgArgs = args.slice(1).join(" ");

                message.channel.send(msgArgs)
                    message.delete(1).catch(console.error);
                    
                };

        
        

    }
);

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    
 
    switch (args[0]) { 
        case 'info':
            const Embed = new RichEmbed()
            .setTitle("Commands")
            .setColor(0xFF0000)
            .setDescription("Prefix e! Commands: info clear poll say");
 
            message.author.send(Embed)
        
        case 'clear':
            if(!args[1]) return message.reply('Error')
            message.channel.bulkDelete(args[1]);
            break;
    }
 
 
});

bot.on('message', message =>{
    let args = message.content.substring(PREFIX.length).split(" ");


    switch(args[0]){


        case "poll":
            const Embed = new RichEmbed()
                .setColor(0xffC300)
                .setTitle("Inititate Poll")
                .setDescription("e!poll to initiate a simple poll");


                if(!args[1]){
                    message.channel.send(Embed);
                    break;
                }


                let msgArgs = args.slice(1).join(" ");


                message.channel.send( "📋" + "**" + msgArgs + "**").then(messageReation => {
                    messageReation.react("👍");
                    messageReation.react("👎")
                    message.delete(1000).catch(console.error);
                });


        break;
    }
});

bot.on('message', msg =>{
    if(msg.content === "neko"){
        msg.channel.sendMessage('neko neko :3');
    }
})


bot.login(process.env.BOT_TOKEN);
