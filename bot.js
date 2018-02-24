const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'g<ping') {
    	message.reply('pong!');
  	}
});

client.on('message', message => {
    if (message.content === 'g<creator') {
    	message.reply('Subscribe to the creator of the bot: https://www.youtube.com/channel/UCs-h0-6bpZkWtnNlb1oWM1g?view_as=subscriber');
  	}
});

client.on('message', message => {
    if (message.content === 'g<hi') {
    	message.reply('Hello!');
  	}
});

client.on('message', message => {
    if (message.content === 'g<hello') {
    	message.reply('Hi!');
  	}
});

client.on('message', message => {
    if (message.content === 'g<info') {
    	message.reply('I was made by Brenth#4650 this is a alt/helpful bot for your server!');
  	}
});

client.on('message', message => {
    if (message.content === 'g<help') {
    	message.reply('1. g<info 2. g<ping 3. g<hello 4. g<hi 5. g<creator 6. g<discord 7. g<github 8. g<tools 9. g<bing 10. g<xd 11. g<help 12. g<uganda 13. g<friends');
  	}
});

client.on('message', message => {
    if (message.content === 'g<discord') {
    	message.reply('https://discord.gg/fqB8p2t');
  	}
});

client.on('message', message => {
    if (message.content === 'g<github') {
    	message.reply('https://github.com/BrenthGH-YT/GuildedBot');
  	}
});

client.on('message', message => {
    if (message.content === 'g<tools') {
    	message.reply('Tools Used: Heroku, DiscordDev and Github');
  	}
});

client.on('message', message => {
    if (message.content === 'g<bing') {
    	message.reply('BONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'g<xd') {
    	message.reply('why. just why.');
  	}
});

client.on('message', message => {
    if (message.content === 'g<uganda') {
    	message.reply('Dew u no de wey? If you do: http://i0.kym-cdn.com/photos/images/original/001/329/453/ba0.jpg and https://orig00.deviantart.net/e70c/f/2018/017/1/0/ugandan_knuckles_by_imprimez-dc0cj6c.png');
  	}
});

client.on('message', message => {
    if (message.content === 'g<friends') {
    	message.reply('Creators Friends: MC Gods#2808 NICO_THE_PRO#5337 xBlazerPK#9165 ShqneFNM#7404');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
