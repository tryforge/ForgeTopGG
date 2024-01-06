"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("forgescript");
const dotenv_1 = require("dotenv");
const __1 = require("..");
(0, dotenv_1.config)();
const top = new __1.ForgeTopGG({
    token: process.env.TOPGG_TOKEN,
    auth: process.env.TOPGG_AUTH,
    events: [
        "error",
        "posted",
        "voted"
    ],
    post: {
        interval: 3600000 // Every hour
    }
});
const client = new forgescript_1.ForgeClient({
    logLevel: forgescript_1.LogPriority.High,
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
});
top.commands.add({
    type: "error",
    code: `$log[Error $postStatsError]`
});
top.commands.add({
    type: "posted",
    code: `$log[posted!]`
});
top.commands.add({
    type: "voted",
    code: `$log[voted by $voteUserID]`
});
// eslint-disable-next-line no-undef
client.login(process.env.TOKEN);
//# sourceMappingURL=client.js.map