# ForgeTopGG
Automatically post your bot stats and receive vote events from the site.

## Example (TypeScript)
```ts
import { ForgeTopGG } from "forgetop.gg";
import { ForgeClient } from "forgescript";

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