"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const __1 = require("..");
const sdk_1 = require("@top-gg/sdk");
exports.default = new forgescript_1.NativeFunction({
    name: "$hasVoted",
    version: "1.0.0",
    description: "Checks whether a user has voted a bot",
    brackets: true,
    args: [
        {
            name: "user ID",
            rest: false,
            required: true,
            type: forgescript_1.ArgType.User,
            description: "The user to check for vote"
        }
    ],
    unwrap: true,
    output: forgescript_1.ArgType.Boolean,
    async execute(ctx, [user]) {
        const api = new sdk_1.Api(ctx.getExtension(__1.ForgeTopGG, true)["options"].token);
        return this.success(await api.hasVoted(user.id).catch(ctx.noop));
    },
});
//# sourceMappingURL=hasVoted.js.map