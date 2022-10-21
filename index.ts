import {Client, ClientOptions} from 'discord.js';

import 'dotenv/config';

import ready from './src/ready';
import interactionCreate from './src/interaction/interactionCreate';

const token = process.env.TOKEN_BOT_DISCORD_SECRET;

console.log('Bot is starting...');

const client = new Client({
  intents: [],
});

ready(client);
interactionCreate(client);

client.login(token);
