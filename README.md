# ForgeTopGG
Automatically post your bot stats and receive vote events from the site.

> To receive vote events, you must set your webhook url in the settings of your bot/server on top.gg to the ip/domain of your bot host + the port it's listening to, which by default is `3000` and `/dblwebhook` at the end.
> An example would be `http://api.lynnux.xyz/dblwebhook`
> Another example would be `http://192.168.10.1:3000/dblwebhook`

## Example (JavaScript)
```ts
const { ForgeTopGG } = require("forgetop.gg");
const { ForgeClient } = require("forgescript");

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