const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json")

/*var dict = [];
const users = message.guild.members;

if (users !== null) {
    users.forEach(function(entry) {
        dict.push({
            key:   entry["user"]["username"],
            value: -1
        });
    });
}*/

client.on("ready", () => {
	client.user.setActivity(`Bow. (wow)`);
});

client.on("message", async message => {
	if (message.author.bot) return;

    if (message.member.user.tag === "Blackniss#8574") {
        console.log("target in sight");
        if (Math.round(Math.random()) * 100 === 69) {
            console.log("take the shot");
            message.channel.send("@Blackniss#8574 slut");
            return;
        }
    }

	if (message.content.indexOf(config.prefix) !== 0) return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

    if (command === "debug" && message.member.user.tag === "JoeBiden#7874") {
        console.log("i'm in");
        var d = new Date();
        message.channel.send(d.getDate());
        return;
    }
	
	if (command === "commands") {
        message.channel.send("**List of tricks:**\n"
                             + "\t!ely\n"
                             + "\t!fetusdeletus\n"
                             + "\t!comp\n");
        return;
	}

	if (command === "ely") {
		message.channel.send("fuckin egirls, man\nhttps://imgur.com/a/rO4ARa9");
        return;
	}
	
	if (command === "fetusdeletus") {
		message.channel.send("https://imgur.com/a/8EQqePU");
        return;
	}
	
	if (command === "comp") {
	    /*if (dict[message.member.user.username] === -1) {
            // placement
            const sr = Math.round(Math.random() * 5000);
            dict[message.member.user.username] = sr
            var rank;
            if (sr >= 4000) rank = "grandmaster";
            else if (sr >= 3500) rank = "master";
            else if (sr >= 3000) rank = "diamond";
            else if (sr >= 2500) rank = "plat";
            else if (sr >= 2000) rank = "gold";
            else if (sr >= 1500) rank = "silver";
            else rank = "bronze";
            message.channel.send(`You've placed in ${rank} with ${sr} SR`);
        } else {*/
            const sr = Math.round(Math.random() * 100 - 50);
            // const newSr = dict[message.member.user.username] + sr;
            // dict[message.member.user.username] = newSr;
            if (sr < 0) {
	            message.channel.send("You lose " + Math.abs(sr) + " SR lol bot"); //. You are now at " + newSr);
            } else {
                message.channel.send("You gain " + sr + " SR somehow"); //. You are now at " + newSr);
            }
        //}
        return;
    }
		
});

client.login(process.env.BOT_TOKEN);
