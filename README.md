# ForgeTopGG
Automatically post your bot stats and receive vote events from the site.

> To receive vote events, you must set your webhook url in the settings of your bot/server on Top.gg to the ip/domain of your bot host + the port it's listening to, which by default is `3000` and `/dblwebhook` at the end.

## Example (JavaScript)
```ts
const { ForgeTopGG } = require("@tryfroge/forge.topgg");
const { ForgeClient } = require("@tryforge/forgescript");

const top = new ForgeTopGG({
    token: "top.gg token",
    auth: "top.gg authorization value for webhooks",
    events: [
        "error",
        "posted",
        "voted"
    ],
    post: {
        interval: 3_600_000 // Update bot stats every hour
    }
})

const client = new ForgeClient({
    intents: [
        "Guilds",
        "MessageContent",
        "GuildMessages",
    ],
    events: [],
    mobile: true,
    useInviteSystem: true,
    prefixes: ["!", "<@$botID>"],
    extensions: [
        top
    ],
})

top.commands.add({
    type: "error",
    code: `$log[Error $postStatsError]`
})

top.commands.add({
    type: "posted",
    code: `$log[posted!]`
})

top.commands.add({
    type: "voted",
    code: `$log[voted by $voteUserID]`
})

client.login("bot token")
```