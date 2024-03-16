"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$voteQuery",
    version: "1.0.0",
    description: "Returns the query params used for the guild",
    unwrap: false,
    output: forgescript_1.ArgType.User,
    execute(ctx) {
        return this.success(ctx.runtime.extras?.query);
    },
});
//# sourceMappingURL=voteQuery.js.map