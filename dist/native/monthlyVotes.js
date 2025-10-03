"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const __1 = require("..");
const sdk_1 = require("@top-gg/sdk");
exports.default = new forgescript_1.NativeFunction({
    name: "$monthlyVotes",
    version: "1.0.0",
    description: "Gets total votes of the bot this month",
    unwrap: false,
    output: forgescript_1.ArgType.Number,
    async execute(ctx) {
        const api = new sdk_1.Api(ctx.getExtension(__1.ForgeTopGG, true)["options"].token);
        return this.success((await api.getBot(ctx.client.user.id).catch(ctx.noop))?.monthlyPoints);
    },
});
//# sourceMappingURL=monthlyVotes.js.map