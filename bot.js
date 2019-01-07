const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

const blk = new Date(2000, 2, 16);
const omg = new Date(2000, 11, 20);
const psy = new Date(2000, 1, 26);
const fez = new Date(2000, 0, 7);
const prl = new Date(2000, 2, 23);
const joe = new Date(2000, 1, 14);
const bam = new Date(2000, 6, 4);

var date = new Date();

const birthdays = {
    [blk]: "Happy birthday, <@163692421845221376>!",
    [omg]: "Happy birthday, <@210128801131134976>!",
    [psy]: "Happy birthday, <@283349679809363969>!",
    [fez]: "Happy birthday, <@194936061254828033>!",
    [prl]: "Happy birthday, <@226457095224950784>!",
    [joe]: "Happy birthday, <@346442977402683395>!",
    [bam]: "Happy birthday, <@99599122083889152>!"
};

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

// client.users.get("name", "USERNAMEHERE").id;

client.on("ready", () => {
	client.user.setActivity(`Bow. (wow)`);
});

client.on("message", async message => {
	if (message.author.bot) return;

    if (message.member.user.tag === "Blackniss#8574") {
        if (Math.round(Math.random()) * 100 === 69) {
            console.log("take the shot");
            message.channel.send("<@163692421845221376> slut");
            return;
        }
    }

    // Listen I know this shouldn't run every message, I'll change it to amortized O(1) one day ok ok
    var today = new Date();
    //if (date !== today) {
        date = today;
        var formattedDate = new Date(2000, date.getMonth(), date.getDate());

        for (var key in birthdays) {
            console.log("key: " + key + "\ndate: " + formattedDate);
            if (Date.parse(key).getTime() === formattedDate.getTime()) {
                console.log("MATCH");
                const channel = message.guild.channels.find(channel => channel.name === "chat");
                console.log(channel);
                channel.send(birthdays[key]);
            }
        }
    //}

	if (message.content.indexOf(config.prefix) !== 0) return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

    if (command === "debug" && message.member.user.tag === "JoeBiden#7874") {
        message.channel.send(formattedDate + "\n" + fez) + "\n";
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
