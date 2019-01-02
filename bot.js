const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json")

client.on("ready", () => {
	console.log(`it comes`);
	client.user.setActivity(`Bow. (wow)`);
});

client.on("message", async message => {
	if (message.author.bot) return;
	if (message.content.indexOf(config.prefix) !== 0) return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	if (command === "ely") {
		message.channel.send("https://imgur.com/a/rO4ARa9");
	}
});

client.login(config.token);