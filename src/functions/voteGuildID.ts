import { WebhookPayload } from "@top-gg/sdk";
import { ArgType, NativeFunction } from "forgescript";

export default new NativeFunction({
    name: "$voteGuildID",
    version: "1.0.0",
    description: "Returns the guild id that was voted",
    unwrap: false,
    output: ArgType.Guild,
    execute(ctx) {
        return this.success((ctx.runtime.extras as WebhookPayload)?.guild)
    },
})