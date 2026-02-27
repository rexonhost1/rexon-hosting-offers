const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

const TOKEN = process.env.TOKEN;
const CHANNEL_ID = "1476856479075008611";

client.once('ready', async () => {
  console.log(`Logged in as ${client.user.tag}`);

  const channel = await client.channels.fetch(CHANNEL_ID);

  const embed = new EmbedBuilder()
    .setTitle("📡 Rexon Hosting Status")
    .setDescription(`
🟢 **Node 1** - ONLINE  
🟢 **Node 2** - ONLINE  
🟢 **Node 3** - ONLINE  

Last Updated: Just Now
`)
    .setColor("Green")
    .setFooter({ text: "Rexon Hosting" })
    .setTimestamp();

  channel.send({ embeds: [embed] });
});

client.login(TOKEN);