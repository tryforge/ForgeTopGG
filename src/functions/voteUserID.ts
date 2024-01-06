import { WebhookPayload } from "@top-gg/sdk";
import { ArgType, NativeFunction } from "forgescript";

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