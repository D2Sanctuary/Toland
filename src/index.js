#!/usr/bin/env node

console.log(`\x1b[36mPreparing...`);

// libraries
const Discord = require(`discord.js`);
require('dotenv').config();

const client = new Discord.Client();
const consoleGreen = `\x1b[32m`;
const consoleRed = `\x1b[31m`;
const consoleOrange = `\x1b[33m`;
const consoleCyan = `\x1b[36m`;

// login
client.login(process.env.BOT_TOKEN).then();

//wenn fertig eingeloggt, dies in der Konsole ausgeben
client.once(`ready`, () => {
	client.user.setActivity(`alone`, { type: `PLAYING` });
	console.log(`${consoleCyan}Login${consoleOrange}`);
});

//Bei Empfang einer Nachricht
client.on(`message`, async (message) => {
	if (message.author.bot) return;

	if (message.content.toLowerCase().startsWith('yo toland')) {
		message.channel.send('Cant do shit for now, BUT im online :)');
	}
});
