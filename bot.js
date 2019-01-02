const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json")

client.on("ready", () => {
	client.user.setActivity(`Bow. (wow)`);
});

client.on("message", async message => {
	if (message.author.bot) return;
	if (message.content.indexOf(config.prefix) !== 0) return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	
	if (command === "commands") {
        message.channel.send("**List of tricks:**\n"
                             + "\t!ely\n"
                             + "\t!fetusdeletus\n"
                             + "\t!comp\n");
	}

	if (command === "ely") {
		message.channel.send("fuckin egirls, man\nhttps://imgur.com/a/rO4ARa9");
	}
	
	if (command === "fetusdeletus") {
		message.channel.send("https://imgur.com/a/8EQqePU");
	}
	
	if (command === "comp") {
        const sr = Math.random() * 100 - 50;
        if (sr < 0) {
		    message.channel.send("You lose " + sr + " SR lol bot");
        } else {
            message.channel.send("You gain " + sr + " SR despite yourself");
        }
    }
		
});

client.login(process.env.BOT_TOKEN);
