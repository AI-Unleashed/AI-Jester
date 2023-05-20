Setup Instructions

Create a new application on the Discord developer portal ([https://discord.com/developers/applications](https://discord.com/developers/applications)). Give it a name and an avatar, and note down the CLIENT ID

Set your Bot Permissions (should only need to read messages) and enable MESSAGE CONTENT INTENT under Privileged Gateway Intents.

in the bot section “Reset Token” and note down the token

go to this link and paste in client ID

[https://discord.com/oauth2/authorize?scope=bot&client_id=](https://discord.com/oauth2/authorize?scope=bot&client_id=)<CLIENT ID>

Now the bot can be added to the server. At this point it will just show as offline

Setting up the bot to run locally(Nodejs needs to be installed):

get the code and run npm i in directory its in to install dependencies

create a .env and paste in the token from above, and an Open AI api key ([https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)) into:

DISCORD_BOT_TOKEN=<Token from discord developer portal here>
OPENAI_API_KEY=<Openai API Key here>

run the server using nodemon(node would also work but requires restarts for code changes): nodemon bot.js

bot should now be online and responding, enjoy!
