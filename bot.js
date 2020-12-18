require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client({
  partials: ["MESSAGE"]
});

const BOT_PREFIX = "!";
const MOD_ME_COMMAND = "mod-me";

client.on('messageDelete', msg => {
  msg.channel.send("Stop deleting messages")
})

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!!!`);
});

client.on('message', msg => {
  if (msg.content === "I love sex") {
    msg.react('❤️');
  }
  if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
    modUser(msg.member);
  }
});

function modUser(member) {
  member.roles.add("789622223731556402");
}

client.login(process.env.BOT_TOKEN);