import { Interpreter } from "@tryforge/forgescript";
import { ForgeTopGG } from "..";
import { TopGGEventHandler } from "../structures/TopGGEventHandlers";

export default new TopGGEventHandler({
    name: "posted",
    version: "1.0.0",
    description: "This event is called when your bot's stats are posted to top.gg",
    listener(posted) {
        const commands = this.getExtension(ForgeTopGG, true).commands.get("posted")
        
        for (const command of commands) {
            Interpreter.run({
                obj: {},
                client: this,
                command,
                data: command.compiled.code,
                extras: posted
            })
        }
    },
})