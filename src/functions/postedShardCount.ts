import { BotStats } from "@top-gg/sdk";
import { ArgType, NativeFunction } from "@tryforge/forgescript";

export default new NativeFunction({
    name: "$postedShardCount",
    version: "1.0.0",
    description: "The amount of shards that was posted",
    unwrap: false,
    output: ArgType.Number,
    execute(ctx) {
        return this.success((ctx.runtime.extras as BotStats)?.shardCount)
    },
})