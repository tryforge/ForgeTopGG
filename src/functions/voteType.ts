import { WebhookPayload } from "@top-gg/sdk";
import { ArgType, NativeFunction } from "forgescript";

export default new NativeFunction({
    name: "$voteType",
    version: "1.0.0",
    description: "Returns the type of the vote (upvoted | test)",
    unwrap: false,
    output: ArgType.String,
    execute(ctx) {
        return this.success((ctx.runtime.extras as WebhookPayload)?.type)
    },
})