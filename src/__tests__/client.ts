import { ForgeClient, LogPriority } from "forgescript"
import { config } from "dotenv"
import { ActivityType, Events } from "discord.js"
import { ForgeTopGG } from ".."
config()

const top = new ForgeTopGG({
    token: process.env.TOPGG_TOKEN!,
    auth: process.env.TOPGG_AUTH!,
    events: [
        "error",
        "posted",
        "voted"
    ],
    post: {
        interval: 3_600_000 // Every hour
    }
})

const client = new ForgeClient({
    logLevel: LogPriority.High,
    intents: [
        "Guilds",
        "MessageContent",
        "GuildMessages",
        "GuildMembers",
        "DirectMessages",
        "GuildInvites",
        "GuildModeration",
        "GuildMessageReactions",
        "AutoModerationExecution"
    ],
    events: [
        "autoModerationActionExecution",
        "guildAuditLogEntryCreate",
        "ready",
        "messageCreate",
        "messageUpdate",
        "messageReactionAdd",
        "guildMemberAdd",
        "interactionCreate",
    ],
    disableFunctions: [
        "$guildName",
        "$cope"
    ],
    mobile: true,
    useInviteSystem: true,
    prefixes: ["!", "<@$botID>"],
    restrictions: {
        userIDs: ["1096285761365610576"],
    },
    extensions: [
        top
    ],
    respondOnEdit: 10000,
    optionalGuildID: true,
})

top.commands.add({
    type: "error",
    code: `$log[Error $postStatsError]`
})

top.commands.add({
    type: "voted",
    code: `$log[voted by $voteUserID]`
})

client.commands.load(__dirname + "/commands")

// eslint-disable-next-line no-undef
client.login(process.env.TOKEN)
