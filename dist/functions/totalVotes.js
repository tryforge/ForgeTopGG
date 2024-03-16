"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const undici_1 = require("undici");
const __1 = require("..");
exports.default = new forgescript_1.NativeFunction({
    name: "$totalVotes",
    version: "1.0.0",
    description: "Gets total votes of the bot",
    unwrap: false,
    output: forgescript_1.ArgType.Boolean,
    async execute(ctx) {
        const req = await (0, undici_1.fetch)(`https://top.gg/api/bots/${ctx.client.user.id}`, {
            headers: {
                authorization: ctx.getExtension(__1.ForgeTopGG, true)["options"].token
            }
        }).then(x => x.json());
        return this.success(req.points);
    },
});
//# sourceMappingURL=totalVotes.js.map