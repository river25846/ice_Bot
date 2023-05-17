// Require the necessary discord.js classes
import { Client, Events, GatewayIntentBits } from 'discord.js'
import vueInit from '@/core/vue'
import dotenv from 'dotenv'
import {loadCommands,loadEvents} from '@/core/loader'
import {useAppStore} from '@/store/app'


vueInit()
dotenv.config()

loadCommands()


// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const appStore = useAppStore()
appStore.client = client

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'

/*
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});
*/

loadEvents()

// Log in to Discord with your client's token
client.login(process.env.TOKEN)