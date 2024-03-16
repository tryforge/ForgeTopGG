import { ArgType, NativeFunction } from "@tryforge/forgescript"
import { fetch } from "undici"
import { ForgeTopGG } from "..";

export default new NativeFunction({
    name: "$hasVoted",
    version: "1.0.0",
    description: "Checks whether an user has voted a bot",
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
    async execute(ctx, args) {
        const req: { voted: 1 | 0 } = await fetch(`https://top.gg/api/bots/${ctx.client.user.id}/check?userId=${args[0].id}`, {
            headers: {
                authorization: ctx.getExtension(ForgeTopGG, true)["options"].token
            }
        }).then(x => x.json() as any)
        return this.success(Boolean(req.voted))
    },
})