"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$voteGuildID",
    version: "1.0.0",
    description: "Returns the guild that was voted",
    deprecated: true,
    unwrap: false,
    output: forgescript_1.ArgType.Guild,
    execute(ctx) {
        return this.success(ctx.runtime.extras?.guild);
    },
});
//# sourceMappingURL=voteGuildID.js.map