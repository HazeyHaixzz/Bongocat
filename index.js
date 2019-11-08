const {Client, RichEmbed} = require('discord.js');
const bot = new Client();

const PREFIX = 'e!';
 

bot.on('ready', () =>{

    console.log('ElectroDynamix is now online.');

})

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.find(channel.name === "welcome");
    if(!channel) return;

    channel.send('Welcome to MuffinStonks, ${member}, please type "e!info" for more infomation!')
});

bot.on('message', msg =>{
    if(msg.content === "hi"){
        msg.reply('What support do u need?');
    }
})

bot.on('message', msg =>{
    if(msg.content === "hello"){
        msg.reply('What support do u need?');
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
            .setTitle("Welcome to MuffinStonks")
            .setColor(0xFF0000)
            .setDescription("Remember to read everything in the server to fully understand whats goin on.");
 
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
    if(msg.content === "whitelist"){
        msg.reply('Please enter the username that you want to be whitelisted.');
        msg.reply('You will be whitelisted once you receive a 👍 emoji.');
    }
})

bot.login(process.env.BOT_TOKEN);
