import { ArgType, NativeFunction } from "@tryforge/forgescript";

export default new NativeFunction({
    name: "$postStatsError",
    version: "1.0.0",
    description: "The error thrown while posting stats",
    unwrap: false,
    output: ArgType.String,
    execute(ctx) {
        return this.success((ctx.runtime.extras as Error)?.message)
    },
})