const {Client, RichEmbed, Attachment} = require('discord.js');
const bot = new Client();

const PREFIX = 'e!';
 
const cheerio = require('cheerio');

const request = require('request');

var version = '1.3';


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
        msg.channel.sendMessage('neko :3');
    }
})

bot.on('message', msg =>{
    if(msg.content === "no u"){
        msg.channel.sendMessage('neko neko.. :(');
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


bot.on('message', message => {

 

    let args =message.content.substring(PREFIX.length).split(" ");

 

    switch (args[0]) {
        case 'meme':
        image(message);
        break;
    } 
});

 

function image(message){

 

    var options = {

        url: "http://results.dogpile.com/serp?qc=images&q=" + "meme",

        method: "GET",

        headers: {

            "Accept": "text/html",

            "User-Agent": "Chrome"

        }

    };

 

 

 

 

 

    request(options, function(error, response,responseBody) {

        if (error) {

            return;

        }

 

 

        $ = cheerio.load(responseBody);

 

 

        var links = $(".image a.link");

 

        var urls = newArray(links.length).fill(0).map((v, i) =>links.eq(i).attr("href"));

       

        console.log(urls);

 

        if (!urls.length) {

           

            return;

        }

 

        // Send result

        message.channel.send(urls[Math.floor(Math.random() * urls.length)]);

    });

 

 

 

 

 

 

 

 

}



bot.login(process.env.BOT_TOKEN);
