import { Interpreter } from "forgescript";
import { ForgeTopGG } from "..";
import { TopGGEventHandler } from "../structures/TopGGEventHandlers";

export default new TopGGEventHandler({
    name: "voted",
    version: "1.0.0",
    description: "This event is called when someone votes your top.gg bot",
    listener(voted) {
        const commands = this.getExtension(ForgeTopGG, true).commands.get("voted")

        for (const command of commands) {
            Interpreter.run({
                obj: {},
                client: this,
                command,
                data: command.compiled.code,
                extras: voted
            })
        }
    },
})