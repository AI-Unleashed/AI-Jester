import dotenv from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
);

client.on("messageCreate", async function (message) {
  try {
    if (message.author.bot) return;
    const discordMessage = message.content;
    const negativeWords = ["sucks", "ugly", "bad"];
    let prompt = "";
    if (negativeWords.some((word) => discordMessage.includes(word))) {
      prompt =
        "provide a short (2 sentence max) inspirational rebuttal to this: " +
        discordMessage;
    } else if (discordMessage.length == 69) {
      prompt =
        "a joke about 2 people in love. Prefix with message: This message had 69 characters heres a joke:";
    } else return;
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: 100,
    });
    const gptResponse = response.data.choices[0].message.content;
    return message.reply(gptResponse);
  } catch (err) {
    console.log(err.message);
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
