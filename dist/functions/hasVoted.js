"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const undici_1 = require("undici");
const __1 = require("..");
exports.default = new forgescript_1.NativeFunction({
    name: "$hasVoted",
    version: "1.0.0",
    description: "Checks whether an user has voted a bot",
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
    async execute(ctx, args) {
        const req = await (0, undici_1.fetch)(`https://top.gg/api/bots/${ctx.client.user.id}/check?userId=${args[0].id}`, {
            headers: {
                authorization: ctx.getExtension(__1.ForgeTopGG, true)["options"].token
            }
        }).then(x => x.json());
        return this.success(Boolean(req.voted));
    },
});
//# sourceMappingURL=hasVoted.js.map