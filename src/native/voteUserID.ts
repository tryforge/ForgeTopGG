import { ArgType, NativeFunction } from "@tryforge/forgescript"
import { WebhookPayload } from "@top-gg/sdk"

export default new NativeFunction({
    name: "$voteUserID",
    version: "1.0.0",
    description: "Returns the user who voted the bot",
    unwrap: false,
    output: ArgType.User,
    execute(ctx) {
        return this.success((ctx.runtime.extras as WebhookPayload)?.user)
    },
})