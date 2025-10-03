import { ArgType, NativeFunction } from "@tryforge/forgescript"
import { WebhookPayload } from "@top-gg/sdk"

export default new NativeFunction({
    name: "$voteQuery",
    version: "1.0.0",
    description: "Returns the query params used for the guild",
    unwrap: false,
    output: ArgType.String,
    execute(ctx) {
        return this.success((ctx.runtime.extras as WebhookPayload)?.query)
    },
})