const { Client, GatewayIntentBits, EmbedBuilder, ActivityType } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

const TOKEN = process.env.TOKEN;
const CHANNEL_ID = "1476856479343706183";

client.once('ready', async () => {  // make ready callback async
    console.log(`Logged in as ${client.user.tag}!`);

    // Rotating statuses
    const statuses = [
        { name: "RexonCloud", type: ActivityType.Playing },
        { name: "Hosting Servers", type: ActivityType.Watching },
        { name: "Monitoring Activity", type: ActivityType.Listening }
    ];

    let i = 0;
    setInterval(() => {
        const status = statuses[i];
        client.user.setActivity(status.name, { type: status.type });
        i = (i + 1) % statuses.length;
    }, 15000); // rotate every 15 seconds

    // Send embed once when bot is ready
    try {
        const channel = await client.channels.fetch(CHANNEL_ID);

        const embed = new EmbedBuilder()
            .setTitle("🚨 Rexon Hosting Offer")
            .setDescription(`
 📈 **CPU:** ♾️
 📟 **RAM:** ♾️
 💾 **SSD:** ♾️
 ✨ NVME SSD with 500mps Speed.
 ✨ 8 core CPU.
 ✨ High Speed Ram.
 💵 **At ₹60/- Per Month Only! 💵**

Available Till: 7 Days!
`)
            .setColor("Red")
            .setFooter({ text: "Rexon Hosting" })
            .setTimestamp();

        await channel.send({ embeds: [embed] });
    } catch (err) {
        console.error("Failed to send embed:", err);
    }
});

client.login(TOKEN);



