import { ArgType, NativeFunction } from "forgescript";
import { fetch } from "undici"
import { ForgeTopGG } from "..";

export default new NativeFunction({
    name: "$monthlyVotes",
    version: "1.0.0",
    description: "Gets total votes of the bot this month",
    brackets: true,
    unwrap: true,
    output: ArgType.Boolean, 
    async execute(ctx, args) {
        const req: { 
            points: number
            monthlyPoints: number
         } = await fetch(`https://top.gg/api/bots/${ctx.client.user.id}`, {
            headers: {
                authorization: ctx.getExtension(ForgeTopGG, true)["options"].token
            }
        }).then(x => x.json() as any)
        return this.success(req.monthlyPoints)
    },
})