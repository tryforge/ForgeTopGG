import { BotStats } from "@top-gg/sdk";
import { ArgType, NativeFunction } from "forgescript";

export default new NativeFunction({
    name: "$postedServerCount",
    version: "1.0.0",
    description: "The server count that was posted",
    unwrap: false,
    output: ArgType.Number,
    execute(ctx) {
        return this.success((ctx.runtime.extras as BotStats)?.serverCount)
    },
})