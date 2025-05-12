import { ArgType, NativeFunction } from "@tryforge/forgescript"
import { ForgeTopGG } from ".."
import { Api } from "@top-gg/sdk"

export default new NativeFunction({
    name: "$hasVoted",
    version: "1.0.0",
    description: "Checks whether a user has voted a bot",
    brackets: true,
    args: [
        {
            name: "user ID",
            rest: false,
            required: true,
            type: ArgType.User,
            description: "The user to check for vote"
        }
    ],
    unwrap: true,
    output: ArgType.Boolean, 
    async execute(ctx, [user]) {
        const api = new Api(ctx.getExtension(ForgeTopGG, true)["options"].token)
        return this.success(await api.hasVoted(user.id).catch(ctx.noop))
    },
})