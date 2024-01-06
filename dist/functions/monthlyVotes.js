"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("forgescript");
const undici_1 = require("undici");
const __1 = require("..");
exports.default = new forgescript_1.NativeFunction({
    name: "$monthlyVotes",
    version: "1.0.0",
    description: "Gets total votes of the bot this month",
    unwrap: false,
    output: forgescript_1.ArgType.Boolean,
    async execute(ctx) {
        const req = await (0, undici_1.fetch)(`https://top.gg/api/bots/${ctx.client.user.id}`, {
            headers: {
                authorization: ctx.getExtension(__1.ForgeTopGG, true)["options"].token
            }
        }).then(x => x.json());
        return this.success(req.monthlyPoints);
    },
});
//# sourceMappingURL=monthlyVotes.js.map