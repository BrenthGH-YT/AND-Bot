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
    	message.reply('1. g<info 2. g<ping 3. g<hello 4. g<hi 5. g<creator 6. g<discord 7. g<github 8. g<tools 9. g<bing 10. g<xd 11. g<help 12. g<uganda 13. g<friends 14. g<memes 15. g<mcgods 16. g<xblazerpk 17. g<download 18. g<mcpros');
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

client.on('message', message => {
    if (message.content === 'g<memes') {
    	message.reply('https://orig00.deviantart.net/e70c/f/2018/017/1/0/ugandan_knuckles_by_imprimez-dc0cj6c.png https://ih1.redbubble.net/image.32625229.2652/flat,800x800,070,f.jpg https://i.amz.mshcdn.com/GW_Be6gnFzS2rtF-KJ1CoIbsY0s=/1200x627/2016%2F02%2F06%2F55%2FGettyImages.0e07c.jpg https://i.ytimg.com/vi/Ou6uXU0KFss/hqdefault.jpg https://www.funnypica.com/wp-content/uploads/2015/05/Funny-Memes-17-570x641.jpg https://i.pinimg.com/736x/d6/09/e2/d609e22384ddd556414b27644053dea3.jpg');
  	}
});

client.on('message', message => {
    if (message.content === 'g<mcgods') {
    	message.reply('MC Gods#2808: Imaginary playing GMOD Prop Hunt! Me: Yey? MC Gods#2808: Ooh! Good hiding spot is this the secrets of youtube. Me: Secrets of youtube? you think they now whats going on. MC Gods#2808: has been crushed to death.');
  	}
});

client.on('message', message => {
    if (message.content === 'g<xblazerpk') {
    	message.reply('xBlazerPK: dude im going to win bedwars i tell ya! Your dick is going to be wonged if i kill you this round. Me: Talking about my dick and being a dick doesnt make yours any bigger. xBlazerPK: fell into the void.');
  	}
});

client.on('message', message => {
    if (message.content === 'g<download') {
    	message.reply('https://discordapp.com/oauth2/authorize?client_id=369375342466433025&scope=bot&permissions=0');
  	}
});

client.on('message', message => {
    if (message.content === 'g<mcpros') {
    	message.reply('Pro: Sup! Where are you hiding? Im going to kill you (bedwars) and if I win i raise my mid finger to my victory. Me: Roses are Red, Violets are Blue, I have five fingers the middle ones for you. Pro: fell into the void.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
