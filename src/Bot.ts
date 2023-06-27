import { Client, ClientOptions } from "discord.js";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";

const token =
  "MTEyMzM2MDQ5MzQ5NTY0ODM1Nw.G-CBHz.9Catd3pptpsNfotXHuSFnf5Rubp-dj224ZNMv0"; // add your token here

console.log("Bot is starting...");

const client = new Client({
  intents: [],
});

ready(client);
interactionCreate(client);

client.login(token);
