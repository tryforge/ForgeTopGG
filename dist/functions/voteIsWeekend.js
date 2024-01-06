"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$voteIsWeekend",
    version: "1.0.0",
    description: "Returns whether the vote was during weekend",
    unwrap: false,
    output: forgescript_1.ArgType.Boolean,
    execute(ctx) {
        return this.success(ctx.runtime.extras?.isWeekend);
    },
});
//# sourceMappingURL=voteIsWeekend.js.map