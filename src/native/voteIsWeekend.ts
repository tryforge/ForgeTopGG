import { ArgType, NativeFunction } from "@tryforge/forgescript"
import { WebhookPayload } from "@top-gg/sdk"

export default new NativeFunction({
    name: "$voteIsWeekend",
    version: "1.0.0",
    description: "Returns whether the vote was during weekend",
    unwrap: false,
    output: ArgType.Boolean,
    execute(ctx) {
        return this.success((ctx.runtime.extras as WebhookPayload)?.isWeekend)
    },
})