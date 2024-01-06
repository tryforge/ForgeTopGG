"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$postStatsError",
    version: "1.0.0",
    description: "The error thrown while posting stats",
    unwrap: false,
    output: forgescript_1.ArgType.String,
    execute(ctx) {
        return this.success(ctx.runtime.extras?.message);
    },
});
//# sourceMappingURL=postStatsError.js.map