"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$postedServerCount",
    version: "1.0.0",
    description: "The server count that was posted",
    unwrap: false,
    output: forgescript_1.ArgType.Number,
    execute(ctx) {
        return this.success(ctx.runtime.extras?.serverCount);
    },
});
//# sourceMappingURL=postedServerCount.js.map