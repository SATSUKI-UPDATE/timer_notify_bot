import { Client, Intents } from "discord.js";
import discordSetting from "./discord-info.json";

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client
  .login(discordSetting.token)
  .then(() => console.log("Successfully logged in Discord"))
  .catch((err) => console.error(err));

client.on("ready", () => {
  console.log("Discord connected");
});
