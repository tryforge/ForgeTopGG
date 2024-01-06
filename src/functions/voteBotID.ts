import { WebhookPayload } from "@top-gg/sdk";
import { ArgType, NativeFunction } from "forgescript";

export default new NativeFunction({
    name: "$voteBotID",
    version: "1.0.0",
    description: "Returns the bot id that was voted",
    unwrap: false,
    output: ArgType.User,
    execute(ctx) {
        return this.success((ctx.runtime.extras as WebhookPayload)?.bot)
    },
})