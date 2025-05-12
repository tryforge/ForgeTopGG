import { ArgType, NativeFunction } from "@tryforge/forgescript"
import { ForgeTopGG } from ".."
import { Api } from "@top-gg/sdk"

export default new NativeFunction({
    name: "$monthlyVotes",
    version: "1.0.0",
    description: "Gets total votes of the bot this month",
    unwrap: false,
    output: ArgType.Number, 
    async execute(ctx) {
        const api = new Api(ctx.getExtension(ForgeTopGG, true)["options"].token)
        return this.success((await api.getBot(ctx.client.user.id).catch(ctx.noop))?.monthlyPoints)
    },
})