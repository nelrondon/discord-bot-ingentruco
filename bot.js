import { Client, Events, GatewayIntentBits } from "discord.js";
import { TOKEN } from "./config.js";

import { handleNewMember } from "./events/welcome.js";

import * as qlq from "./commands/qlq.js";
import * as factos from "./commands/factos.js";

import express from "express";
const app = express();
const port = process.env.PORT || 3000;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

const readyDiscord = () => {
  console.log(`El Bot está Listo, Bienvenido ${client.user.tag}`);
};

const handleInteraction = async (interaction) => {
  if (!interaction.isCommand()) return;
  const { commandName } = interaction;
  if (commandName === "qlq") await qlq.execute(interaction);
  if (commandName === "factura") await factos.execute(interaction);
};

app.listen(port, () => {
  client.once(Events.ClientReady, readyDiscord);

  client.login(TOKEN);
  client.on(Events.InteractionCreate, handleInteraction);
  client.on(Events.GuildMemberAdd, handleNewMember);
});
