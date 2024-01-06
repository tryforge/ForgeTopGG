"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$voteType",
    version: "1.0.0",
    description: "Returns the type of the vote (upvoted | test)",
    unwrap: false,
    output: forgescript_1.ArgType.String,
    execute(ctx) {
        return this.success(ctx.runtime.extras?.type);
    },
});
//# sourceMappingURL=voteType.js.map